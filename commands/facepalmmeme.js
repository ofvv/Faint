const Discord = require("discord.js");
const got = require("got"); 

module.exports = {
    name: 'fpmeme',
    description: "Sends a random facepalmmeme image",
    async execute(message, args, client) {
        const fpmeme = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/facepalm/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            fpmeme.setTitle(`${memeTitle}`)
            fpmeme.setURL(`${memeUrl}`)
            fpmeme.setImage(memeImage)
            fpmeme.setColor('RANDOM')
            fpmeme.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(fpmeme);
        })
    }
}