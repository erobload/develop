const rp = require('request-promise');

var DomParser = require('dom-parser');
var parser = new DomParser();

const options = {
    transform: (body) => {
        var dom = parser.parseFromString(body);

        return dom;
    }
};

const urls = [
    'https://www.amazon.com',
];

const promises = urls.map((url) => {
    return (async () => {
        try {
            const html = await rp.get(url, options);
            console.dir(html);

            //return $('title').text();
        } catch (error) {
            console.error('Error:', error);
        }
    })();
});
Promise.all(promises).then((result) => {
    console.log(result);
});