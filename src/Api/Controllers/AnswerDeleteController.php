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

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Xsoft\MasonTag\Repositories\AnswerRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class AnswerDeleteController extends AbstractDeleteController
{
    protected $answers;

    public function __construct(AnswerRepository $answers)
    {
        $this->answers = $answers;
    }

    protected function delete(ServerRequestInterface $request)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');

        $field = $this->answers->findOrFail($id);

        $this->answers->delete($field);
    }
}
