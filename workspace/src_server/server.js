const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/api');
const debug = require("debug")("myapp:logs");
// ログで出力する際の色を指定
debug.color = 2;
const http = require("http").Server(app);
const PORT = process.env.PORT || 8080;

/*
 * middlewareの設定
 */

/*** Logger ***/
const LOG_DIRECTORY = __dirname + '/../logs'
const fs = require("fs");
// フォルダがなければ作成
fs.existsSync(LOG_DIRECTORY) || fs.mkdirSync(LOG_DIRECTORY)
app.use(require("morgan")('combined', {
    // 日ごとにlogを出力するstreamを変える
    stream: require("file-stream-rotator").getStream({
        filename: LOG_DIRECTORY + '/access-%DATE%.log',
        frequency: 'daily',
        verbose: false,
        date_format: "YYYY-MM-DD"
    })
}));
/*** body-parser ***/
app.use(bodyParser.json());

app.use(express.static("./public"));

// ルーティング設定
app.use(apiRoutes);

http.listen(PORT, function () {
    debug('listening. Port:' + PORT);
});
