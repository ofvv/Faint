const Discord = require("discord.js");
const got = require("got"); 

module.exports = {
    name: 'memeeconomy',
    description: "Sends a random memeeconomy image",
    async execute(message, args, client) {
        const memeeconomy = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/MemeEconomy/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            memeeconomy.setTitle(`${memeTitle}`)
            memeeconomy.setURL(`${memeUrl}`)
            memeeconomy.setImage(memeImage)
            memeeconomy.setColor('RANDOM')
            memeeconomy.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(memeeconomy);
        })
    }
}