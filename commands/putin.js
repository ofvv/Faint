const DIG = require("discord-image-generation");
module.exports = {
    name: 'putin',
    description: "generates image with putin format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Poutine().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "putin.png");;
        message.channel.send(attach)
        
    }
}