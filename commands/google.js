const Discord = require('discord.js');
const image = require('images-scraper');

const google = new image({
    puppeteer:{
        headless: true,
    }
})

module.exports = {
    name: "google",
    description: "Get a google image",
    async execute(message, args, client) {
        const query = args.join(" ")
        if(!query) return message.channel.send('Please enter a search query')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}