const DIG = require("discord-image-generation");
module.exports = {
    name: 'color',
    description: "generates image with color format",
    async execute(message, args, client, Discord ){
        let color = args.join(" ")
        let img = await new DIG.Color().getImage(color)
        let attach = new Discord.MessageAttachment(img, "color.png");;
        message.channel.send(attach)
        
    }
}