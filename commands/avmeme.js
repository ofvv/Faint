const Discord = require("discord.js");
const got = require("got"); 

module.exports = {
    name: 'avmeme',
    description: "Sends a random avation meme",
    async execute(message, args, client, Discord) {
        const av = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/aviationmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            av.setTitle(`${memeTitle}`)
            av.setURL(`${memeUrl}`)
            av.setImage(memeImage)
            av.setColor('RANDOM')
            av.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(av);
        })
    }
}