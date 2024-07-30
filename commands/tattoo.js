const DIG = require("discord-image-generation");
module.exports = {
    name: 'tattoo',
    description: "generates image with tattoo format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Tatoo().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "tatoo.png");;
        message.channel.send(attach)
    }
}