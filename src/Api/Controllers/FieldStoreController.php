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

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Xsoft\MasonTag\Api\Serializers\FieldSerializer;
use Xsoft\MasonTag\Repositories\FieldRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FieldStoreController extends AbstractCreateController
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

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);

        return $this->fields->store($attributes);
    }
}
