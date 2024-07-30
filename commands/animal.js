const Discord = require("discord.js");
const got = require("got");

module.exports = {
    name: 'animal',
    description: "Sends a random cursed image",
    async execute(message, args, client) {
        const animal = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/animalpics/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            animal.setTitle(`${memeTitle}`)
            animal.setURL(`${memeUrl}`)
            animal.setImage(memeImage)
            animal.setColor('RANDOM')
            animal.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(animal);
        })
    }
}