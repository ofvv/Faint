const Discord = require("discord.js");
const got = require("got");

module.exports = {
    name: 'hentai',
    description: "Sends a random hentai image",
    async execute(message, args, client) {
        const hentai = new Discord.MessageEmbed()
        if (!message.channel.nsfw) {
            return message.channel.send(':x:This command only works in nsfw channels.')
        }
        got('https://www.reddit.com/r/hentai/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            hentai.setTitle(`${memeTitle}`)
            hentai.setURL(`${memeUrl}`)
            hentai.setImage(memeImage)
            hentai.setColor('RANDOM')
            hentai.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(hentai);
        })
    }
}