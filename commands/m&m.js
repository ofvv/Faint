const DIG = require("discord-image-generation");
module.exports = {
    name: 'm&m',
    description: "generates image with m&m format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Mms().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "m&m.png");;
        message.channel.send(attach)
        
    }
}