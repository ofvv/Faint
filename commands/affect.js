const DIG = require("discord-image-generation");
module.exports = {
    name: 'affect',
    description: "generates image with affect format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Affect().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "affect.png");;
        message.channel.send(attach)
        
    }
}