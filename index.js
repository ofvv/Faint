require('module-alias/register')
const Discord = require('discord.js');
const distube = require("distube")
const fs = require('fs');
require('dotenv').config();
const path = require('path')
const client = new Discord.Client();

const keepAlive = require('./server.js');
 
 
client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube.on("playSong", (message, queue, song) => message.channel.send(
    `Now playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
))
client.distube.on("addSong", (message, queue, song) => message.channel.send(
    `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
))
 
//cmd handler
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on('ready', async() => {
    console.log("Faint's bot is now online")
    
    // const baseFile = 'command-base.js'
    // const commandBase = require(`./commands/${baseFile}`)

    // const readCommands = dir =>{
    //     const files = fs.readdirSync(path.join(__dirname, dir))
    //     for(const file of files){
    //         const stat = fs.lstatSync(path.join(__dirname, dir, file))
    //         if(stat.isDirectory()){
    //             readCommands(path.join(dir, file))
    //         }else if(file !== baseFile){
    //             const option = require(path.join(__dirname, dir, file))
    //             commandBase(client, option)
    //         }
    //     }
    // }
    // readCommands('commands')
});
 
client.on('message', message => {
 
    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.content.toLowerCase() === "goat") return client.commands.get('goat').execute(message, args, Discord);
    if (message.content.toLowerCase() === "dumbass") return client.commands.get('dumbass').execute(message, args, );
    if (message.content.toLowerCase() === "epic") return client.commands.get('epic').execute(message, args, );
    if (message.content.toLowerCase() === "troll") return client.commands.get('trollface').execute(message, args, Discord);
    if (message.content.toLowerCase() === "faggot") return message.channel.send("Hey that's not nice");
    if (message.content.toLowerCase() === "screw") return message.channel.send("Your mom");
    if (message.content.toLowerCase() === "faint") return message.channel.send("Is fucking amazing!");
    if (message.content.toLowerCase() === "fuck") return message.channel.send("Your mom");
    if (message.content.toLowerCase() === "kys") return message.channel.send("That could really hurt someone!");
    if (message.content.toLowerCase() === "cap") return message.channel.send("no cap!");
 
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
 
    if (!client.commands.has(command));
 
    try {
        client.commands.get(command).execute(message, args, client, Discord);
    } catch (error) {
        console.error(error);
        message.reply("That command doesn't exist!");
    }
})
 
keepAlive();
client.login(process.env.DISCORD_TOKEN)