const DIG = require("discord-image-generation");
module.exports = {
    name: 'invert',
    description: "generates image with invert format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Invert().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "invert.png");;
        message.channel.send(attach)
        
    }
}