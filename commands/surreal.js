const Discord = require("discord.js");
const got = require("got"); 

module.exports = {
    name: 'surreal',
    description: "Sends a random surreal image",
    async execute(message, args, client) {
        const surreal = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/surrealmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            surreal.setTitle(`${memeTitle}`)
            surreal.setURL(`${memeUrl}`)
            surreal.setImage(memeImage)
            surreal.setColor('RANDOM')
            surreal.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(surreal);
        })
    }
}