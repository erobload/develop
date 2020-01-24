//モデルモジュール読み込み
const Content = require("../models/Content");

class ContentsController {

    async index(req, res, next) {
        const result = await Content.aggregate();
        console.log(result)
        res.json(result);
    };

    async store(req, res, next) {
        for (let i = 0; i < 10000; i++) {
            const content = {
                title: "えろげぶろーど",
                image_path: "/assets/img/contents0" + Math.floor(Math.random() * Math.floor(10)) + ".jpg",
                time: '2020年1月24日',
                brand: "erobload",
                categories: [
                    "カテゴリー" + Math.floor(Math.random() * Math.floor(10)),
                    "カテゴリー" + Math.floor(Math.random() * Math.floor(10)),
                    "カテゴリー" + Math.floor(Math.random() * Math.floor(10)),
                ]
            }
            Content.insert(content);
        }
        res.json('OK');
    };

    async show(req, res, next) {

    };

    async update(req, res, next) {

    };

    async delete(req, res, next) {

    };
}

module.exports = new ContentsController();