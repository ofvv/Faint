const distube = require("distube");
const Discord = require("discord.js");
module.exports = {
    name: "play",
    aliases: ["p"],
    description: "Play music",
    inVoiceChannel: true,
     async execute (message, args, client) {
        const play = new Discord.MessageEmbed()
        const string = args.join(" ")
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
}

