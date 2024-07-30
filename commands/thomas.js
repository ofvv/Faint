const DIG = require("discord-image-generation");
module.exports = {
    name: 'thomas',
    description: "generates image with thomas format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Thomas().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "thomas.png");;
        message.channel.send(attach)
        
    }
}