const fs = require('fs');


class HtmlPage {

    static generateHtml(scale) {
        console.log(scale);
        return fs.readFileSync(__dirname+'/page.html' ,'utf8');
    }

}

module.exports = HtmlPage