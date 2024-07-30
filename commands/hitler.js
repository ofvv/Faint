const DIG = require("discord-image-generation");
module.exports = {
    name: 'hitler',
    description: "generates image with hitler format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Hitler().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "hitler.png");;
        message.channel.send(attach)
        
    }
}