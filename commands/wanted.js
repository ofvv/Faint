const DIG = require("discord-image-generation");
module.exports = {
    name: 'wanted',
    description: "generates image with wanted format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let currency = '€'
        let img = await new DIG.Wanted().getImage(avatar, currency)
        let attach = new Discord.MessageAttachment(img, "wanted.png");;
        message.channel.send(attach)
        
    }
}