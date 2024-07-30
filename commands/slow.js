const { APIMessage } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = {
    name: 'slow',
    description: "slows down chat",
    async execute(message, args1, client) {
     message.channel.setRateLimitPerUser(args1[0])
     message.channel.send(`Slowmode is now: ${args1[0]}s`)
    }
}