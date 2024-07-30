const DIG = require("discord-image-generation");
module.exports = {
    name: 'confusedstonk',
    description: "generates image with confusedStonk format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.ConfusedStonk().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "confusedStonk.png");;
        message.channel.send(attach)
        
    }
}