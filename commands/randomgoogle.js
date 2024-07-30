const Discord = require("discord.js");
const image = require('images-scraper')
const google = new image({
    puppeteer: {
        headless: true,
    }
})
 
module.exports = {
    name: 'googlerandom',
    description: "Sends a ranndom google image",
    async execute(message, args) {
        const query = args.join(" ")
        if (!query) return message.channel.send('Please enter a search query')
 
        var random = Math.floor((Math.random() * 90) + 0);
        console.log(random)
        const results = await google.scrape(query, 100)
        const hasil = results[random].url
        message.channel.send(`Generate Picture...`)
        let embedpic = new Discord.MessageEmbed()
            .setTitle(`Picture successfuly generate  `)
            .setImage(hasil)
        message.channel.send(embedpic)
 
    }
}