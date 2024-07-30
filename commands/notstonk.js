const DIG = require("discord-image-generation");
module.exports = {
    name: 'notstonk',
    description: "generates image with notstonk format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.NotStonk().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "notstonk.png");;
        message.channel.send(attach)
        
    }
}