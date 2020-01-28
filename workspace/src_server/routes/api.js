const express = require('express');
const router = express.Router();

//モデルの読み込み
const content = require('../models/Content');
//コントローラーの読み込み
const contentsController = require('../controller/ContentsController');
const categoryController = require('../controller/CategoryController');

router.get('/portal/api/contents', contentsController.index);

router.get('/portal/api/category', categoryController.index);

module.exports = router;