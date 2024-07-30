const DIG = require("discord-image-generation");
module.exports = {
    name: 'facepalm',
    description: "generates image with facepalm format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Facepalm().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "facepalm.png");;
        message.channel.send(attach)
        
    }
}