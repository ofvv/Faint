const DIG = require("discord-image-generation");
module.exports = {
    name: 'karaba',
    description: "generates image with karaba format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Karaba().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "karaba.png");;
        message.channel.send(attach)
        
    }
}