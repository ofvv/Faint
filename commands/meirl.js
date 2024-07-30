const Discord = require("discord.js");
const got = require("got"); 

module.exports = {
    name: 'meirl',
    description: "Sends a random meirl image",
    async execute(message, args, client) {
        const meirl = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/me_irl/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            meirl.setTitle(`${memeTitle}`)
            meirl.setURL(`${memeUrl}`)
            meirl.setImage(memeImage)
            meirl.setColor('RANDOM')
            meirl.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(meirl);
        })
    }
}