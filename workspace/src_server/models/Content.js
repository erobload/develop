//Modelモジュール読み込み
const Model = require("../lib/Model");

class Content extends Model {

    fillable = ['_id', 'title', 'image_path', 'time', 'link',  'brand', 'categories']
    
    collection_name = "contents";
}

module.exports = new Content();