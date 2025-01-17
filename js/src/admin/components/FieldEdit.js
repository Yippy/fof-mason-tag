import app from 'flarum/admin/app';
import icon from 'flarum/common/helpers/icon';
import extractText from 'flarum/common/utils/extractText';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';
import FieldAnswersEdit from './FieldAnswersEdit';

export default class FieldEdit extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.field = this.attrs.field;
        this.dirty = false;
        this.processing = false;
        this.toggleFields = false;

        if (!this.field) {
            this.initNewField();
        }
    }

    initNewField() {
        this.field = app.store.createRecord('mason-fields', {
            attributes: {
                name: '',
                description: '',
                min_answers_count: 0,
                max_answers_count: 1, // Currently not visible in the editor
                user_values_allowed: false,
                show_when_empty: false,
                validation: '',
                icon: '',
            },
        });
    }

    boxTitle() {
        if (this.field.exists) {
            return this.field.name();
        }

        return app.translator.trans('xsoft-mason-tag.admin.buttons.new-field');
    }

    view() {
        return (
            <div className="Mason-Box">
                {this.field.exists && <span className="fas fa-arrows-alt Mason-Box--handle js-field-handle" />}
                <button
                    className="Button Button--block Mason-Box-Header"
                    onclick={() => {
                        this.toggleFields = !this.toggleFields;
                    }}
                >
                    <div className="Mason-Box-Header-Title">{this.boxTitle()}</div>
                    <div>
                        {this.field.exists && app.translator.trans('xsoft-mason-tag.admin.buttons.edit-field') + ' '}
                        {icon('fas fa-chevron-' + (this.toggleFields ? 'up' : 'down'))}
                    </div>
                </button>
                {this.toggleFields && this.viewFields()}
            </div>
        );
    }

    viewFields() {
        return [
            <div className="Mason-Box--row">
                <div className="Mason-Box--column">
                    <h4>{app.translator.trans('xsoft-mason-tag.admin.titles.field-settings')}</h4>
                    <div className="Form-group">
                        <label>
                            {app.translator.trans('xsoft-mason-tag.admin.fields.name')}
                            <input
                                className="FormControl"
                                value={this.field.name()}
                                oninput={(event) => {
                                    this.updateAttribute('name', event.target.value);
                                }}
                            />
                            <div className="helpText">{app.translator.trans('xsoft-mason-tag.admin.fields.name-help')}</div>
                        </label>
                    </div>
                    <div className="Form-group">
                        <label>
                            {app.translator.trans('xsoft-mason-tag.admin.fields.description')}
                            <input
                                className="FormControl"
                                value={this.field.description()}
                                oninput={(event) => {
                                    this.updateAttribute('description', event.target.value);
                                }}
                            />
                            <div className="helpText">{app.translator.trans('xsoft-mason-tag.admin.fields.description-help')}</div>
                        </label>
                    </div>
                    <div className="Form-group">
                        <label>
                            {/* multi-answers were never implemented so min_answers_count just switches between 0 and 1 for optional and required */}
                            <Switch
                                state={this.field.min_answers_count() === 1}
                                onchange={(val) => this.updateAttribute('min_answers_count', val ? 1 : 0)}
                            >
                                {app.translator.trans('xsoft-mason-tag.admin.fields.required')}
                            </Switch>
                        </label>
                    </div>
                    <div className="Form-group">
                        <label>
                            <Switch state={this.field.show_when_empty()} onchange={this.updateAttribute.bind(this, 'show_when_empty')}>
                                {app.translator.trans('xsoft-mason-tag.admin.fields.show_when_empty')}
                            </Switch>
                        </label>
                        <div className="helpText">{app.translator.trans('xsoft-mason-tag.admin.fields.show_when_empty-help')}</div>
                    </div>
                    <div className="Form-group">
                        <label>
                            <Switch state={this.field.user_values_allowed()} onchange={this.updateAttribute.bind(this, 'user_values_allowed')}>
                                {app.translator.trans('xsoft-mason-tag.admin.fields.user_values_allowed')}
                            </Switch>
                        </label>
                        <div className="helpText">{app.translator.trans('xsoft-mason-tag.admin.fields.user_values_allowed-help')}</div>
                    </div>
                    <div className="Form-group">
                        <label>
                            {app.translator.trans('xsoft-mason-tag.admin.fields.validation')}
                            <input
                                className="FormControl"
                                disabled={!this.field.user_values_allowed()}
                                placeholder={
                                    this.field.user_values_allowed()
                                        ? ''
                                        : app.translator.trans('xsoft-mason-tag.admin.fields.enable-user-values-for-validation')
                                }
                                value={this.field.validation()}
                                oninput={(e) => {
                                    this.updateAttribute('validation', e.target.value);
                                }}
                            />
                            <div className="helpText">
                                {app.translator.trans('xsoft-mason-tag.admin.fields.validation-help', {
                                    a: <a href="https://laravel.com/docs/6.x/validation#available-validation-rules" target="_blank" />,
                                })}
                            </div>
                        </label>
                    </div>
                    <div className="Form-group">
                        <label>
                            {app.translator.trans('xsoft-mason-tag.admin.fields.icon')} {this.iconPreview(this.field.icon())}
                            <input
                                className="FormControl"
                                value={this.field.icon()}
                                oninput={(event) => {
                                    this.updateAttribute('icon', event.target.value);
                                }}
                            />
                        </label>
                        <div className="helpText">
                            {app.translator.trans('xsoft-mason-tag.admin.fields.icon-help', {
                                a: <a href="https://fontawesome.com/icons?m=free" target="_blank" />,
                            })}
                        </div>
                    </div>
                    <div className="Mason-Box--column">
                        <h4>{app.translator.trans('xsoft-mason-tag.admin.titles.field-answers')}</h4>
                        <div className="Form-group">
                            <FieldAnswersEdit field={this.field} />
                        </div>
                    </div>
                </div>
            </div>,
            <div className="ButtonGroup">
                <Button
                    className="Button Button--primary"
                    loading={this.processing}
                    disabled={!this.readyToSave()}
                    onclick={this.saveField.bind(this)}
                >
                    {app.translator.trans('xsoft-mason-tag.admin.buttons.' + (this.field.exists ? 'save' : 'add') + '-field')}
                </Button>

                {this.field.exists && (
                    <Button className="Button Button--danger" loading={this.processing} onclick={this.deleteField.bind(this)}>
                        {app.translator.trans('xsoft-mason-tag.admin.buttons.delete-field')}
                    </Button>
                )}
            </div>,
        ];
    }

    updateAttribute(attribute, value) {
        this.field.pushAttributes({
            [attribute]: value,
        });

        this.dirty = true;
    }

    readyToSave() {
        // TODO: check required fields
        return this.dirty;
    }

    saveField() {
        this.processing = true;

        const createNewRecord = !this.field.exists;

        this.field
            .save(this.field.data.attributes)
            .then(() => {
                if (createNewRecord) {
                    this.initNewField();
                    this.toggleFields = false;
                }

                this.processing = false;
                this.dirty = false;

                m.redraw();
            })
            .catch((err) => {
                this.processing = false;

                throw err;
            });
    }

    deleteField() {
        if (
            !confirm(
                extractText(
                    app.translator.trans('xsoft-mason-tag.admin.messages.delete-field-confirmation', {
                        name: this.field.name(),
                    })
                )
            )
        ) {
            return;
        }

        this.processing = true;

        this.field
            .delete()
            .then(() => {
                this.processing = false;

                m.redraw();
            })
            .catch((err) => {
                this.processing = false;

                throw err;
            });
    }

    iconPreview(value) {
        if (!value) {
            return '';
        }

        return [
            ' (',
            app.translator.trans('xsoft-mason-tag.admin.fields.icon-preview', {
                preview: icon(value),
            }),
            ')',
        ];
    }
}
