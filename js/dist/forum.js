/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/helpers/sortByAttribute.ts":
/*!***********************************************!*\
  !*** ./src/common/helpers/sortByAttribute.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortByAttribute)
/* harmony export */ });
function sortByAttribute(items, attr) {
  if (!attr) attr = 'sort';
  return items.sort(function (a, b) {
    return a[attr]() - b[attr]();
  });
}

/***/ }),

/***/ "./src/common/models/Answer.ts":
/*!*************************************!*\
  !*** ./src/common/models/Answer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Answer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Answer = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Answer, _Model);
  function Answer() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.content = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('content');
    _this.is_suggested = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('is_suggested');
    _this.sort = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort');
    _this.field = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('field');
    return _this;
  }
  var _proto = Answer.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/answers' + (this.exists ? '/' + this.data.id : '');
  };
  return Answer;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/models/ByTag.ts":
/*!************************************!*\
  !*** ./src/common/models/ByTag.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ByTag)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var ByTag = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ByTag, _Model);
  function ByTag() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.tag_name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('tag_name');
    _this.tag_id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('tag_id');
    _this.field_name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('field_name');
    _this["switch"] = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('switch');
    return _this;
  }
  var _proto = ByTag.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/bytags' + (this.exists ? '/' + this.data.id : '');
  };
  return ByTag;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/models/Field.ts":
/*!************************************!*\
  !*** ./src/common/models/Field.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__);



var Field = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Field, _Model);
  function Field() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.description = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description');
    _this.min_answers_count = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('min_answers_count');
    _this.max_answers_count = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('max_answers_count');
    _this.show_when_empty = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('show_when_empty');
    _this.user_values_allowed = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('user_values_allowed');
    _this.validation = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('validation');
    _this.icon = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('icon');
    _this.sort = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort');
    _this.deleted_at = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('deleted_at', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.allAnswers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('allAnswers');
    _this.suggestedAnswers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('suggestedAnswers');
    _this.required = flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default()('min_answers_count', function (min_answers_count) {
      return min_answers_count > 0;
    });
    _this.multiple = flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default()('max_answers_count', function (max_answers_count) {
      return max_answers_count > 1;
    });
    return _this;
  }
  var _proto = Field.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/fields' + (this.exists ? '/' + this.data.id : '');
  };
  return Field;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/addComposerFields.js":
/*!****************************************!*\
  !*** ./src/forum/addComposerFields.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/DiscussionComposer */ "flarum/common/components/DiscussionComposer");
/* harmony import */ var flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Composer */ "flarum/components/Composer");
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FieldsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldsEditor */ "./src/forum/components/FieldsEditor.js");
/* harmony import */ var _components_FieldsEditorByTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FieldsEditorByTags */ "./src/forum/components/FieldsEditorByTags.js");
/* harmony import */ var _components_ByTagsComposer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ByTagsComposer */ "./src/forum/components/ByTagsComposer.js");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/tags/components/TagDiscussionModal */ "flarum/tags/components/TagDiscussionModal");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default().prototype.masonAnswers) = [];
  var byTagEnabled = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data.resources[0].attributes["xsoft-mason-tag.by-tag"]);
  var ByTagsUnit = new _components_ByTagsComposer__WEBPACK_IMPORTED_MODULE_6__["default"]();
  var dTag = '';
  var tagChanged = '';
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7___default().prototype), 'onsubmit', function (e) {
    // get name of the tag selected in the modal

    if (this.selected == false) {
      // if no tag is selected, empty the header
      dTag = '';
      return;
    }
    dTag = this.selected[0].data.attributes.name;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'hide', function (e) {
    // remove the the fields from the headerItems...
    dTag = '';
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'headerItems', function (items) {
    var _this = this;
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.canFillMasonFields()) {
      return;
    }

    // so this list contains whether a tag has fields!
    var matchingTags = ByTagsUnit.matchTags();
    if (byTagEnabled) {
      this.myFields = [];
      for (var i = 0; i < matchingTags.length; i++) {
        if (matchingTags[i].tagName == dTag) {
          this.myFields = matchingTags[i].fields;
        }
      }
      // this.myFields is a list of fields that match the selected tag only

      if (tagChanged != dTag) {
        // clear the decks after every tag change
        this.composer.fields.masonAnswers = [];
        tagChanged = dTag;
      }
      items.add('mason-fields', m(_components_FieldsEditorByTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bytags: this.myFields,
        tags: this.composer.fields.tags,
        answers: this.composer.fields.masonAnswers || [],
        onchange: function onchange(answers) {
          _this.composer.fields.masonAnswers = answers;
        }
      }));
    } else {
      items.add('mason-fields', m(_components_FieldsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
        answers: this.composer.fields.masonAnswers || [],
        onchange: function onchange(answers) {
          _this.composer.fields.masonAnswers = answers;
        },
        ontagchange: function ontagchange(tags) {
          _this.composer.fields.tags = tags;
        }
      }));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'data', function (data) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.canFillMasonFields() || !this.composer.fields.masonAnswers) {
      return;
    }
    data.relationships = data.relationships || {};
    data.relationships.masonAnswers = this.composer.fields.masonAnswers;
  });
}

/***/ }),

/***/ "./src/forum/addFieldUpdateControl.js":
/*!********************************************!*\
  !*** ./src/forum/addFieldUpdateControl.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FieldsEditorModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldsEditorModal */ "./src/forum/components/FieldsEditorModal.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default()), 'moderationControls', function (items, discussion) {
    if (discussion.canUpdateMasonAnswers()) {
      items.add('mason-update-answers', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        icon: "fas fa-tag",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_FieldsEditorModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
            discussion: discussion
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.forum.discussion-controls.edit-answers')));
    }
  });
}

/***/ }),

/***/ "./src/forum/addFieldsOnDiscussionHero.js":
/*!************************************************!*\
  !*** ./src/forum/addFieldsOnDiscussionHero.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/DiscussionHero */ "flarum/common/components/DiscussionHero");
/* harmony import */ var flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Composer */ "flarum/components/Composer");
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FieldsViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldsViewer */ "./src/forum/components/FieldsViewer.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    if (!this.attrs.discussion.canSeeMasonAnswers() || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-in-hero')) {
      return;
    }
    items.add('mason-fields', m(_components_FieldsViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      discussion: this.attrs.discussion
    }));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'animateToPosition', function (original, position) {
    // we need to detect if there are any mason fields present and if there are
    // add their height to the default height of the composer window
    var $composer = this.$().stop(true);
    var composerHeight = $composer.outerHeight();
    m.redraw(true);
    $composer.show();

    //const $composer = this.$();
    var headerHeight = this.$('.ComposerBody-header').outerHeight();
    if (position === (flarum_components_Composer__WEBPACK_IMPORTED_MODULE_3___default().PositionEnum.NORMAL) && composerHeight < headerHeight) {
      this.height = headerHeight + composerHeight;
      this.updateHeight();
    }
    return original(position);
  });
}

/***/ }),

/***/ "./src/forum/addFieldsOnDiscussionPost.js":
/*!************************************************!*\
  !*** ./src/forum/addFieldsOnDiscussionPost.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/CommentPost */ "flarum/common/components/CommentPost");
/* harmony import */ var flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/DiscussionPage */ "flarum/common/components/DiscussionPage");
/* harmony import */ var flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FieldsViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldsViewer */ "./src/forum/components/FieldsViewer.js");





function showFieldsOnPost(post) {
  // The CommentPost component is also visible on the user profile, but we don't want to render the fields there
  if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches((flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default()))) {
    return false;
  }

  // We only add fields to the first post, and only if fields are not displayed in the hero
  // TODO: what if the first post is deleted ?
  return post.number() === 1 && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-in-hero');
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    var _this = this;
    if (!this.attrs.post.discussion().canSeeMasonAnswers() || !showFieldsOnPost(this.attrs.post)) {
      return;
    }
    this.subtree.check(function () {
      // Create a string with all answer ids
      // If answers change this string will be different
      return (_this.attrs.post.discussion().masonAnswers() || []).map(function (answer) {
        // Sometimes answer will be undefined while the data is being saved in FieldsEditorModal
        if (!answer) {
          return '';
        }

        // There is a time after discussion.save() is called but before the data included in response is parsed
        // where Flarum will already have updated the relationship, but answer.field will be missing and this causes
        // the field to be skipped in FieldsViewer. So we also need to check the load status of that relationship
        return JSON.stringify([answer.id(), !!answer.field()]);
      }).join(',');
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'content', function (content) {
    if (!this.attrs.post.discussion().canSeeMasonAnswers() || !showFieldsOnPost(this.attrs.post)) {
      return;
    }
    var postHeaderIndex = content.findIndex(function (item) {
      return item.attrs && item.attrs.className === 'Post-header';
    });

    // Insert the new content just after the header
    // or at the very beginning if the header is not found
    content.splice(postHeaderIndex === -1 ? 0 : postHeaderIndex + 1, 0, m(_components_FieldsViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      discussion: this.attrs.post.discussion()
    }));
  });
}

/***/ }),

/***/ "./src/forum/components/ByTagsComposer.js":
/*!************************************************!*\
  !*** ./src/forum/components/ByTagsComposer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ByTagsComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var ByTagsComposer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ByTagsComposer, _Component);
  function ByTagsComposer() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = ByTagsComposer.prototype;
  _proto.matchTags = function matchTags() {
    // build an array of Tags with the fields that match them

    var tags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags');
    var tagsList = [];
    var tempStorage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-bytags');
    var usedList = [];
    var _loop = function _loop() {
      var fields = [];
      var fieldIDs = [];
      tagName = tags[i].data.attributes.name;
      var tagsObj = {};
      usedList = tempStorage.filter(function (match) {
        return match.data.attributes.tag_name == tagName && match.data.attributes["switch"] == true;
      });

      // It may be better to create an object with all the Tags represented
      // even if they have no fields enabled. Turn this conditional back off if so.
      if (usedList[0]) {
        usedList.forEach(function (e) {
          fields.push(e.data.attributes.field_name);
          fieldIDs.push(e.data.id);
        });
        tagsObj = {
          tagName: tagName,
          fields: fields,
          fieldIDs: fieldIDs
        };
        tagsList.push(tagsObj);
      }
    };
    for (var i = 0; i < tags.length; i++) {
      var tagName;
      _loop();
    }
    return tagsList;
  };
  return ByTagsComposer;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/FieldEditDropdown.js":
/*!***************************************************!*\
  !*** ./src/forum/components/FieldEditDropdown.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldEditDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var FieldEditDropdown = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldEditDropdown, _Component);
  function FieldEditDropdown() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldEditDropdown.prototype;
  _proto.view = function view(vnode) {
    // To be certain to not work on object copies, we always read the current one from vnode.attrs
    var _vnode$attrs = vnode.attrs,
      field = _vnode$attrs.field,
      answers = _vnode$attrs.answers,
      _onchange = _vnode$attrs.onchange;
    var selectedAnswerIdsForThisField = [];
    (field.suggestedAnswers() || []).forEach(function (answer) {
      var answerIndex = answers.findIndex(function (a) {
        // Temporary store entries seem to turn into undefined after saving
        if (typeof a === 'undefined') {
          return false;
        }
        return a.id() === answer.id();
      });
      if (answerIndex !== -1) {
        selectedAnswerIdsForThisField.push(answer.id());
      }
    });
    var relationshipInfo = {
      field: {
        data: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().getIdentifier(this.field)
      }
    };
    return m("span", {
      className: "Select"
    }, m("select", {
      className: "Select-input FormControl",
      multiple: field.multiple(),
      onchange: function onchange(event) {
        var answers = [];
        for (var _iterator = _createForOfIteratorHelperLoose(event.target.options), _step; !(_step = _iterator()).done;) {
          var option = _step.value;
          if (option.selected && option.value !== 'none') {
            var answerId = option.value;

            // This will only work with suggested answers for now
            // As they are the only ones registered in the store
            // answers.push(app.store.getById('mason-answers', answerId));

            // need to add field relationship in order to avoid JS error on
            // the text entry side
            var storeObj = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('mason-answers', answerId);
            storeObj.data.relationships = relationshipInfo;
            answers.push(storeObj);
          }
        }
        _onchange(answers);
      }
    }, !field.multiple() && m("option", {
      value: "none",
      selected: selectedAnswerIdsForThisField.length === 0,
      disabled: field.required(),
      hidden: this.placeholderHidden(field)
    }, this.selectPlaceholder(field)), (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_5__["default"])(field.suggestedAnswers() || []).map(function (answer) {
      return m("option", {
        value: answer.id(),
        selected: selectedAnswerIdsForThisField.indexOf(answer.id()) !== -1
      }, answer.content());
    })), flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-caret-down', {
      className: 'Select-caret'
    }));
  };
  _proto.placeholderHidden = function placeholderHidden(field) {
    // If labels are hidden, we need to always show the default value (even if it can't be selected)
    // Otherwise when the field is "required" you can't find the name of the field anymore once something is selected
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders')) {
      return false;
    }
    return field.required();
  };
  _proto.selectPlaceholder = function selectPlaceholder(field) {
    var text = '';
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders')) {
      text += field.name();
      if (field.required()) {
        text += ' *';
      }
      text += ' - ';
    }
    if (field.required()) {
      text += flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers.choose-option');
    } else {
      text += flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers.no-option-selected');
    }
    return text;
  };
  return FieldEditDropdown;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/FieldEditTags.js":
/*!***********************************************!*\
  !*** ./src/forum/components/FieldEditTags.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionFields)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);






var DiscussionFields = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionFields, _Component);
  function DiscussionFields() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = DiscussionFields.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Component.prototype.oninit.call(this, vnode);
    this.tags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags');
    this.selectedTags = [];
    if (this.attrs.discussion) {
      this.tags = this.tags.filter(function (tag) {
        return tag.canAddToDiscussion() || _this.attrs.discussion.tags().indexOf(tag) !== -1;
      });
      this.selectedTags = this.attrs.discussion.tags();
    } else {
      this.tags = this.tags.filter(function (tag) {
        return tag.canStartDiscussion();
      });
    }
    this.minPrimary = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('minPrimaryTags');
    this.maxPrimary = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maxPrimaryTags');
    this.minSecondary = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('minSecondaryTags');
    this.maxSecondary = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maxSecondaryTags');

    // If primary tags are disabled, don't offer them
    if (this.maxPrimary <= 0) {
      this.tags = this.tags.filter(function (tag) {
        return !tag.isPrimary();
      });
    }

    // If secondary tags are disabled, don't offer them
    if (this.maxSecondary <= 0) {
      this.tags = this.tags.filter(function (tag) {
        return tag.isPrimary();
      });
    }
    this.tags = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default()(this.tags);
    this.inputUuid = Math.random().toString(36).substring(2);
  };
  _proto.view = function view() {
    var _classList,
      _this2 = this;
    if (this.maxPrimary > 1 || this.maxSecondary > 1) {
      return m("div", {
        className: "Alert"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.tags.inadequate-settings'));
    }

    // We take the first child selected or if none, the first parent selected
    // Of course this only works if a single tag or tag+parent is selected
    // Multiple tags are not supported on this selector
    var currentSelectedChild = this.selectedTags.length ? this.selectedTags.sort(function (tag) {
      return tag.parent() ? -1 : 1;
    })[0].id() : null;
    var inputUuid = this.inputUuid;
    var required = this.fieldRequired();
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()('Mason-Field Form-group', (_classList = {}, _classList['Mason-Field--label-as-placeholder'] = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders'), _classList))
    }, m("label", {
      "for": "fofMasonTag-selectInput-" + inputUuid
    }, this.fieldLabel()), m("span", {
      className: "Select"
    }, m("select", {
      className: "Select-input FormControl",
      id: "fofMasonTag-selectInput-" + inputUuid,
      onchange: function onchange(event) {
        var id = event.target.value;
        _this2.selectedTags = [];
        if (id !== 'none') {
          _this2.selectedTags.push(_this2.tags.find(function (tag) {
            return tag.id() === id;
          }));
          var parent = _this2.selectedTags[0].parent();
          if (parent) {
            _this2.selectedTags.push(parent);
          }
        }
        _this2.attrs.onchange(_this2.selectedTags);
      }
    }, m("option", {
      value: "none",
      selected: this.selectedTags.length === 0,
      disabled: required,
      hidden: this.placeholderHidden()
    }, this.selectPlaceholder()), this.tags.map(function (tag) {
      var parent = tag.parent();
      return m("option", {
        value: tag.id(),
        selected: tag.id() === currentSelectedChild
      }, (parent ? parent.name() + ' | ' : '') + tag.name());
    }), ","), flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-caret-down', {
      className: 'Select-caret'
    })));
  };
  _proto.fieldRequired = function fieldRequired() {
    return this.minPrimary > 0 || this.minSecondary > 0;
  };
  _proto.fieldLabel = function fieldLabel() {
    var text = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.tags-field-name') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.tags.tags-label');
    if (this.fieldRequired()) {
      text += ' *';
    }
    return text;
  };
  _proto.placeholderHidden = function placeholderHidden() {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders')) {
      return false;
    }
    return this.fieldRequired();
  };
  _proto.selectPlaceholder = function selectPlaceholder() {
    var text = '';
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders')) {
      text += this.fieldLabel() + ' - ';
    }
    if (this.fieldRequired()) {
      text += flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers.choose-option');
    } else {
      text += flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers.no-option-selected');
    }
    return text;
  };
  return DiscussionFields;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/FieldEditText.js":
/*!***********************************************!*\
  !*** ./src/forum/components/FieldEditText.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldEditText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);




var FieldEditText = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldEditText, _Component);
  function FieldEditText() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldEditText.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Component.prototype.oninit.call(this, vnode);
    this.field = this.attrs.field;
    this.answers = this.attrs.answers;
    this.onchange = this.attrs.onchange;
    this.inputId = 'FormControl mason-input-' + this.attrs.inputId;
    this.content = '';
    var answersForThisField = [];
    if (typeof this.answers === 'undefined') {
      answersForThisField = false;
    } else {
      answersForThisField = this.answers.filter(function (answer) {
        // Temporary store entries seem to turn into undefined after saving
        if (typeof answer === 'undefined') {
          return false;
        }
        return answer.field().id() === _this.field.id();
      });
    }
    if (answersForThisField.length) {
      // For now we only support a single custom answer
      this.content = answersForThisField[0].content();
    }
  };
  _proto.view = function view() {
    var _this2 = this;
    return m("input", {
      className: "FormControl",
      required: this.field.required(),
      value: this.content,
      "class": this.inputId,
      oninput: function oninput(e) {
        _this2.content = e.target.value;
        if (_this2.content === '') {
          _this2.onchange([]);
        } else {
          var answer = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('mason-answers', {
            attributes: {
              content: _this2.content
            },
            relationships: {
              field: {
                data: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().getIdentifier(_this2.field)
              }
            }
          });
          _this2.onchange([answer]);
        }
      },
      placeholder: this.fieldPlaceholder()
    });
  };
  _proto.fieldPlaceholder = function fieldPlaceholder() {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders')) {
      return this.field.name() + (this.field.required() ? ' *' : '');
    }
    return '';
  };
  return FieldEditText;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/FieldGrid.js":
/*!*******************************************!*\
  !*** ./src/forum/components/FieldGrid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldGrid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_chunkArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/chunkArray */ "./src/forum/helpers/chunkArray.ts");




var FieldGrid = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldGrid, _Component);
  function FieldGrid() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldGrid.prototype;
  _proto.view = function view() {
    return m("div", {
      className: "Mason-Grid-Wrapper"
    }, m("div", {
      className: "Mason-Grid"
    }, (0,_helpers_chunkArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this.attrs.items, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.column-count')).map(function (row) {
      return m("div", {
        className: "Mason-Row Form-group"
      }, row.map(function (item) {
        return item;
      }));
    })));
  };
  return FieldGrid;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/FieldsEditor.js":
/*!**********************************************!*\
  !*** ./src/forum/components/FieldsEditor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldsEditor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");
/* harmony import */ var _FieldEditDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldEditDropdown */ "./src/forum/components/FieldEditDropdown.js");
/* harmony import */ var _FieldEditText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FieldEditText */ "./src/forum/components/FieldEditText.js");
/* harmony import */ var _FieldEditTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FieldEditTags */ "./src/forum/components/FieldEditTags.js");
/* harmony import */ var _FieldGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FieldGrid */ "./src/forum/components/FieldGrid.js");











var FieldsEditor = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldsEditor, _Component);
  function FieldsEditor() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldsEditor.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Component.prototype.oninit.call(this, vnode);
    this.fields = (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_6__["default"])(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-fields'));

    // Index to quickly do a reverse lookup from answer to field
    this.answerToFieldIndex = [];
    this.fields.forEach(function (field) {
      var answers = field.suggestedAnswers();

      // Since we silenced the error everywhere else using `|| []`, we'll keep just one place here
      // where we log a warning if the relationship appears to be missing
      // This should help troubleshooting what happens if no answers are offered
      if (!Array.isArray(answers)) {
        console.warn('[mason] Missing suggestedAnswers relationship for field', field);
        return;
      }
      answers.forEach(function (answer) {
        _this.answerToFieldIndex[answer.id()] = field.id();
      });
    });
  };
  _proto.view = function view() {
    return m("div", {
      className: "Mason-Fields Mason-Fields--editor"
    }, this.headItems().toArray(), m(_FieldGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      items: this.fieldItems().toArray()
    }));
  };
  _proto.updateSelection = function updateSelection(field, fieldAnswers) {
    var _this2 = this;
    // Keep only answers to other fields
    var answers = this.attrs.answers.filter(function (answer) {
      var reverseFieldLookup = _this2.answerToFieldIndex[answer.id()];

      // If the answer is not in the reverse lookup table it's probably a non-suggested (user) answer
      // In that case the field should be linked in the relationship
      if (typeof reverseFieldLookup === 'undefined') {
        return answer.field().id() !== field.id();
      }
      return reverseFieldLookup !== field.id();
    });
    answers = answers.concat(fieldAnswers);
    this.attrs.onchange(answers);
  };
  _proto.headItems = function headItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')) {
      items.add('title', m("h5", {
        className: "Mason-Field--title"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')));
    }
    return items;
  };
  _proto.fieldItems = function fieldItems() {
    var _this3 = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.tags-as-fields')) {
      items.add('tags', m(_FieldEditTags__WEBPACK_IMPORTED_MODULE_9__["default"], {
        discussion: this.attrs.discussion,
        onchange: function onchange(tags) {
          _this3.attrs.ontagchange && _this3.attrs.ontagchange(tags);
        }
      }));
    }
    this.fields.forEach(function (field) {
      var _classList;
      var inputAttrs = {
        field: field,
        answers: _this3.attrs.answers,
        onchange: function onchange(fieldAnswers) {
          // Every input component calls "onchange" with a list of answers from the store
          _this3.updateSelection(field, fieldAnswers);
        }
      };
      var input = null;
      if (field.user_values_allowed()) {
        input = m(_FieldEditText__WEBPACK_IMPORTED_MODULE_8__["default"], inputAttrs);
      } else {
        input = m(_FieldEditDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], inputAttrs);
      }
      items.add("field-" + field.id(), m("div", {
        "class": flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()('Mason-Field Form-group', (_classList = {}, _classList['Mason-Field--label-as-placeholder'] = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders'), _classList))
      }, m("label", null, field.icon() ? m('[', null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(field.icon()), " ") : null, field.name(), field.required() ? ' *' : null), input, field.description() ? m("div", {
        className: "helpText"
      }, field.description()) : null));
    });
    return items;
  };
  return FieldsEditor;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/FieldsEditorByTags.js":
/*!****************************************************!*\
  !*** ./src/forum/components/FieldsEditorByTags.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldsEditorByTags)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");
/* harmony import */ var _FieldEditDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldEditDropdown */ "./src/forum/components/FieldEditDropdown.js");
/* harmony import */ var _FieldEditText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FieldEditText */ "./src/forum/components/FieldEditText.js");
/* harmony import */ var _FieldEditTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FieldEditTags */ "./src/forum/components/FieldEditTags.js");
/* harmony import */ var _FieldGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FieldGrid */ "./src/forum/components/FieldGrid.js");











var FieldsEditorByTags = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldsEditorByTags, _Component);
  function FieldsEditorByTags() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldsEditorByTags.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Component.prototype.oninit.call(this, vnode);
    this.fields = (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_6__["default"])(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-fields'));

    // Index to quickly do a reverse lookup from answer to field
    this.answerToFieldIndex = [];
    this.fields.forEach(function (field) {
      var answers = field.suggestedAnswers();

      // Since we silenced the error everywhere else using `|| []`, we'll keep just one place here
      // where we log a warning if the relationship appears to be missing
      // This should help troubleshooting what happens if no answers are offered
      if (!Array.isArray(answers)) {
        console.warn('[mason] Missing suggestedAnswers relationship for field', field);
        return;
      }
      answers.forEach(function (answer) {
        _this.answerToFieldIndex[answer.id()] = field.id();
      });
    });
  };
  _proto.view = function view() {
    return m("div", {
      className: "Mason-Fields Mason-Fields--editor"
    }, this.headItems().toArray(), m(_FieldGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      items: this.fieldItems().toArray()
    }));
  };
  _proto.updateSelection = function updateSelection(field, fieldAnswers) {
    var _this2 = this;
    // Keep only answers to other fields
    var answers = this.attrs.answers.filter(function (answer) {
      var reverseFieldLookup = _this2.answerToFieldIndex[answer.id()];

      // If the answer is not in the reverse lookup table it's probably a non-suggested (user) answer
      // In that case the field should be linked in the relationship
      if (typeof reverseFieldLookup === 'undefined') {
        return answer.field().id() !== field.id();
      }
      return reverseFieldLookup !== field.id();
    });
    answers = answers.concat(fieldAnswers);
    this.attrs.onchange(answers);
  };
  _proto.headItems = function headItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')) {
      items.add('title', m("h5", {
        className: "Mason-Field--title"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')));
    }
    return items;
  };
  _proto.fieldItems = function fieldItems() {
    var _this3 = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();

    // taking this feature off beacuse changing tags will affect which fields show up

    // if (app.forum.attribute('xsoft-mason-tag.tags-as-fields')) {
    //     items.add(
    //         'tags',
    //         <FieldEditTags
    //             discussion={this.attrs.discussion}
    //             onchange={(tags) => {
    //                 this.attrs.ontagchange && this.attrs.ontagchange(tags);
    //             }}
    //         />
    //     );
    // }

    this.fields.forEach(function (field) {
      var inputAttrs = {
        field: field,
        bytags: _this3.attrs.bytags,
        inputId: field.data.id,
        answers: _this3.attrs.answers,
        onchange: function onchange(fieldAnswers) {
          // Every input component calls "onchange" with a list of answers from the store
          _this3.updateSelection(field, fieldAnswers);
        }
      };
      var input = null;
      if (field.user_values_allowed()) {
        input = m(_FieldEditText__WEBPACK_IMPORTED_MODULE_8__["default"], inputAttrs);
      } else {
        input = m(_FieldEditDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], inputAttrs);
      }
      _this3.attrs.bytags.forEach(function (tag) {
        // filter the items list for fields we actually need
        if (tag == field.data.attributes.name) {
          var _classList;
          items.add("field-" + field.id(), m("div", {
            "class": flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()('Mason-Field Form-group', (_classList = {}, _classList['Mason-Field--label-as-placeholder'] = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.labels-as-placeholders'), _classList))
          }, m("label", null, field.icon() ? m('[', null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(field.icon()), " ") : null, field.name(), field.required() ? ' *' : null), input, field.description() ? m("div", {
            className: "helpText"
          }, field.description()) : null));
        }
      });
    });
    return items;
  };
  return FieldsEditorByTags;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/FieldsEditorModal.js":
/*!***************************************************!*\
  !*** ./src/forum/components/FieldsEditorModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldsEditorModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FieldsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldsEditor */ "./src/forum/components/FieldsEditor.js");
/* harmony import */ var _FieldsEditorByTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldsEditorByTags */ "./src/forum/components/FieldsEditorByTags.js");
/* harmony import */ var _ByTagsComposer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ByTagsComposer */ "./src/forum/components/ByTagsComposer.js");







var FieldsEditorModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldsEditorModal, _Modal);
  function FieldsEditorModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = FieldsEditorModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.answers = this.attrs.discussion.masonAnswers();
    this.dirty = false;
    this.processing = false;
    this.tagRelationship = this.attrs.discussion.data.relationships.tags.data[0];
    this.byTagEnabled = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data.resources[0].attributes["xsoft-mason-tag.by-tag"]);

    // Stays null if the feature is not used
    this.tags = null;
    var ByTagsUnit = new _ByTagsComposer__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var matchingTags = ByTagsUnit.matchTags();
    this.myFields = [];

    // annoying way to get current Tag name, but it works
    var thisIncludes = this.attrs.discussion.payload.included;
    var findTag = thisIncludes.find(function (element) {
      return element.type == 'tags';
    });
    for (var i = 0; i < matchingTags.length; i++) {
      if (matchingTags[i].tagName == findTag.attributes.name) {
        this.myFields = matchingTags[i].fields;
      }
    }
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers-modal.edit-title', {
      title: m("em", null, this.attrs.discussion.title())
    });
  };
  _proto.content = function content() {
    var _this = this;
    return m('[', null, m("div", {
      className: "Modal-body"
    }, this.byTagEnabled ? m(_FieldsEditorByTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
      discussion: this.attrs.discussion // Only for the tags feature
      ,
      answers: this.answers,
      bytags: this.myFields,
      tags: this.tags,
      onchange: this.answersChanged.bind(this)
    }) : m(_FieldsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      discussion: this.attrs.discussion // Only for the tags feature
      ,
      answers: this.answers,
      onchange: this.answersChanged.bind(this),
      ontagchange: function ontagchange(tags) {
        _this.tags = tags;
        _this.dirty = true;
      }
    })), m("div", {
      className: "Modal-footer"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--primary",
      loading: this.processing,
      disabled: !this.dirty,
      onclick: this.saveAnswers.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.answers-modal.save'))));
  };
  _proto.answersChanged = function answersChanged(answers) {
    this.answers = answers;
    this.dirty = true;
  };
  _proto.saveAnswers = function saveAnswers() {
    var _this2 = this;
    this.processing = true;
    var tagRelationship = {
      data: this.tagRelationship
    };
    var relationships = {
      tags: [tagRelationship],
      masonAnswers: this.answers
    };

    // If tag edit is enabled, take care of them here as well
    // if (this.tags !== null) {
    //     relationships.tags = this.tags;
    // }

    // Use a temporary discussion object
    // Otherwise Flarum persists the relationships to the model while the request is still processing
    // Which causes errors with components outside of the modal redrawing and reading non-persisted data
    // The real discussion will be updated automatically by the store once the request completes which is all we need
    var temporaryDiscussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('discussions');
    temporaryDiscussion.pushData({
      id: this.attrs.discussion.id()
    });
    temporaryDiscussion.exists = true;
    temporaryDiscussion.save({
      relationships: relationships
    }).then(function () {
      _this2.processing = false;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.close();
      m.redraw();
    })["catch"](function (err) {
      _this2.processing = false;
      throw err;
    });
  };
  return FieldsEditorModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/FieldsViewer.js":
/*!**********************************************!*\
  !*** ./src/forum/components/FieldsViewer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldsViewer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FieldsEditorModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldsEditorModal */ "./src/forum/components/FieldsEditorModal.js");
/* harmony import */ var _FieldGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldGrid */ "./src/forum/components/FieldGrid.js");
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");









var FieldsViewer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldsViewer, _Component);
  function FieldsViewer() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldsViewer.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.fields = (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__["default"])(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-fields'));
    this.discussion = this.attrs.discussion;
  };
  _proto.view = function view() {
    var head = this.headItems().toArray();
    var fields = this.fieldsItems().toArray();

    // If all fields are hidden
    // And either no controls are shown or the setting hides them
    // We don't show the viewer
    if (!fields.length && (!head.length || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.hide-empty-fields-section'))) {
      // We need to return an actual dom element or Flarum does not like it
      return m("div", null);
    }
    return m("div", {
      className: "Mason-Fields Mason-Fields--viewer"
    }, head, m(_FieldGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: fields
    }));
  };
  _proto.headItems = function headItems() {
    var _this = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (this.discussion.canUpdateMasonAnswers()) {
      items.add('edit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Mason-Fields--edit",
        icon: "fas fa-pen",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_FieldsEditorModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            discussion: _this.discussion
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.discussion-controls.edit-answers')));
    }
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')) {
      items.add('title', m("h5", {
        className: "Mason-Field--title"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('xsoft-mason-tag.fields-section-title')));
    }
    return items;
  };
  _proto.fieldsItems = function fieldsItems() {
    var _this2 = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    this.fields.forEach(function (field) {
      // Discussion answers to this field
      var answers = (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__["default"])((_this2.discussion.masonAnswers() || []).filter(function (answer) {
        // It's necessary to compare the field() relationship
        // Because field.suggestedAnswers() won't contain new and user answers
        return answer.field() && answer.field().id() === field.id();
      }));
      var answer_list = answers.map(function (answer) {
        return m("span", {
          className: "Mason-Inline-Answer"
        }, answer.content());
      });
      if (answers.length === 0) {
        if (field.show_when_empty()) {
          answer_list.push(m("em", {
            className: "Mason-Inline-Answer"
          }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.forum.post-answers.no-answer')));
        } else {
          // If the field has no answer and the setting is off we don't show it
          return;
        }
      }
      items.add("field-" + field.id(), m("div", {
        className: "Mason-Field Form-group"
      }, m("label", null, field.icon() ? m('[', null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(field.icon()), " ") : null, field.name()), m("div", {
        className: "FormControl Mason-Inline-Answers"
      }, answer_list)));
    });
    return items;
  };
  return FieldsViewer;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/helpers/chunkArray.ts":
/*!*****************************************!*\
  !*** ./src/forum/helpers/chunkArray.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chunkArray)
/* harmony export */ });
/**
 * Split an array into multiple arrays of a given size.
 *
 * Useful for grid layouts.
 *
 * @see https://stackoverflow.com/a/64777515/11091039
 * @param arr Array of items
 * @param size Number of items per array
 */
function chunkArray(arr, size) {
  return Array(Math.ceil(arr.length / size)).fill(undefined).map(function (_, i) {
    return arr.slice(size * i, size + size * i);
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Forum */ "flarum/common/models/Forum");
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_models_Answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/models/Answer */ "./src/common/models/Answer.ts");
/* harmony import */ var _common_models_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/models/Field */ "./src/common/models/Field.ts");
/* harmony import */ var _common_models_ByTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/models/ByTag */ "./src/common/models/ByTag.ts");
/* harmony import */ var _addComposerFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addComposerFields */ "./src/forum/addComposerFields.js");
/* harmony import */ var _addFieldUpdateControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addFieldUpdateControl */ "./src/forum/addFieldUpdateControl.js");
/* harmony import */ var _addFieldsOnDiscussionHero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addFieldsOnDiscussionHero */ "./src/forum/addFieldsOnDiscussionHero.js");
/* harmony import */ var _addFieldsOnDiscussionPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addFieldsOnDiscussionPost */ "./src/forum/addFieldsOnDiscussionPost.js");
/* harmony import */ var _patchModelIdentifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patchModelIdentifier */ "./src/forum/patchModelIdentifier.js");












flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xsoft-ict-mason-tag', function (app) {
  app.store.models['mason-fields'] = _common_models_Field__WEBPACK_IMPORTED_MODULE_5__["default"];
  app.store.models['mason-answers'] = _common_models_Answer__WEBPACK_IMPORTED_MODULE_4__["default"];
  app.store.models['mason-bytags'] = _common_models_ByTag__WEBPACK_IMPORTED_MODULE_6__["default"];
  (flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.masonAnswers) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('masonAnswers');
  (flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.canSeeMasonAnswers) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canSeeMasonAnswers');
  (flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.canUpdateMasonAnswers) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canUpdateMasonAnswers');
  (flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_3___default().prototype.canFillMasonFields) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canFillMasonFields');
  (0,_addComposerFields__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_addFieldsOnDiscussionHero__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_addFieldsOnDiscussionPost__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_addFieldUpdateControl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_patchModelIdentifier__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./src/forum/patchModelIdentifier.js":
/*!*******************************************!*\
  !*** ./src/forum/patchModelIdentifier.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_models_Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/models/Answer */ "./src/common/models/Answer.ts");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), 'getIdentifier', function (original, model) {
    // For Answers that don't yet exist, we include the content and the field relationship when calling the API
    // That way they can be created server-side without making individual API requests for each answer
    if (model instanceof _common_models_Answer__WEBPACK_IMPORTED_MODULE_2__["default"] && !model.exists) {
      return {
        type: model.data.type,
        attributes: {
          content: model.data.attributes.content
        },
        relationships: {
          field: {
            data: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().getIdentifier(model.data.relationships.field)
          }
        }
      };
    }

    // Default behaviour
    return original(model);
  });
}

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/CommentPost":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/CommentPost']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/CommentPost'];

/***/ }),

/***/ "flarum/common/components/DiscussionComposer":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionComposer']" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/common/components/DiscussionHero":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionHero']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/DiscussionHero'];

/***/ }),

/***/ "flarum/common/components/DiscussionPage":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionPage']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/DiscussionPage'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/models/Discussion']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Discussion'];

/***/ }),

/***/ "flarum/common/models/Forum":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Forum']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Forum'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/computed":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/computed']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/computed'];

/***/ }),

/***/ "flarum/components/Composer":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Composer']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Composer'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/tags/components/TagDiscussionModal":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagDiscussionModal']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/components/TagDiscussionModal'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map