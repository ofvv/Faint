module.exports = {
    name: 'dev',
    description: "embed that shows Faint!",
    execute(message, args, client, Discord){
    const trollfaceEmbed = new Discord.MessageEmbed()
    .setColor('#F50E0E')
    .setTitle("Faint's epic bot")
    .setURL('http://ihasabucket.com/')
    .setDescription('Bot developer!')
    .addFields(
        {name: 'Developer', value: 'Faint'},
        {name: 'So now you know', value: "That's about it "},
        {name: "Bye have a great time", value: 'Sayonara'}
    )
    .setImage('https://media1.tenor.com/images/64d47299b3bbcf75f7a6b84e54a778b5/tenor.gif')
    .setFooter('Faint = god');

    message.channel.send(trollfaceEmbed);
    }
    
}