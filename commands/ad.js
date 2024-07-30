const DIG = require("discord-image-generation");
module.exports = {
    name: 'ad',
    description: "generates image with ad format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Ad().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "ad.png");;
        message.channel.send(attach)
        
    }
}