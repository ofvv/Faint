const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
module.exports = (Discord, client) =>{
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
 
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);
 
        client.commands.set(command.name, command);
    }
}