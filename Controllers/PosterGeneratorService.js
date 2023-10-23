const { chromium } = require('playwright');
const HtmlPage = require('../Utils/HtmlPage');

class PosterGeneratorService {

    constructor(scale) {
        this.scale = scale;
    }

    async generatePoster() {
        const browser = await chromium.launch();
        const page = await browser.newPage();

        const htmlContent = this.generateHtml();

        const screenWidth = 600 * this.scale;
        const screenHeight = 400 * this.scale;

        await page.setViewportSize({
            width: screenWidth,
            height: screenHeight
        });

        await page.setContent(htmlContent);

        const screenshot = await page.screenshot({ fullPage: true });

        await browser.close();

        return screenshot;
    }

    generateHtml(){
      return HtmlPage.generateHtml(this.scale)
    }
   
}

module.exports = PosterGeneratorService;
