//モデルモジュール読み込み
const Content = require("../models/Content");

class CategoryController {

    async index(req, res, next) {
        const result = await Content.aggregate([
            { $unwind: "$categories" },
            { $group: { _id: { categories: "$categories" }, categories: { $first: "$categories" } } },
            { $project: { _id: 0, categories: 1 } }])
        res.json(result);
    };

    async store(req, res, next) {

    };

    async show(req, res, next) {

    };

    async update(req, res, next) {

    };

    async delete(req, res, next) {

    };
}

module.exports = new CategoryController();