const DIG = require("discord-image-generation");
module.exports = {
    name: 'gay',
    description: "generates image with gay format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Gay().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "gay.png");;
        message.channel.send(attach)
        
    }
}