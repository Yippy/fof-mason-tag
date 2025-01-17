<?php

/*
 * This file is part of xsoft/mason-tag.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xsoft\MasonTag\Api\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Xsoft\MasonTag\Api\Serializers\FieldSerializer;
use Xsoft\MasonTag\Repositories\FieldRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FieldUpdateController extends AbstractShowController
{
    public $serializer = FieldSerializer::class;

    public $include = [
        'allAnswers',
    ];

    protected $fields;

    public function __construct(FieldRepository $fields)
    {
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');

        $field = $this->fields->findOrFail($id);

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);

        return $this->fields->update($field, $attributes);
    }
}
