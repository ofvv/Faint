const DIG = require("discord-image-generation");
module.exports = {
    name: 'jail',
    description: "generates image with jail format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Jail().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "jail.png");;
        message.channel.send(attach)
        
    }
}