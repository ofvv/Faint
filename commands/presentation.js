const DIG = require("discord-image-generation");
module.exports = {
    name: 'presentation',
    description: "generates image with lisapresentation format",
    async execute(message, args, client, Discord ){
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let text = args.join(' ')
        if (message.content.length > 300) return message.delete()
        let img = await new DIG.LisaPresentation().getImage(text);
        let attach = new Discord.MessageAttachment(img, "presentation.png");;
        message.channel.send(attach)
        
    }
}