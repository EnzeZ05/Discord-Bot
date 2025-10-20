var Scraper = require('images-scraper');
const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name:'image',
    decription: 'this sends an image!',
    async execute(message, args, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}