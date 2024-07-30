module.exports = {
    name: 'trollface',
    description: "embed that shows trollface!",
    execute(message, args, Discord){
    const trollfaceEmbed = new Discord.MessageEmbed()
    .setColor('#F50E0E')
    .setTitle('Get trolled')
    .setURL('')
    .setDescription('Dont let your guard down')
    .addFields(
        {name: 'You got', value: 'test'},
        {name: 'So here you go', value: 'trolololololololol'},
        {name: "And that's GG", value: 'get fucking trolled'}
    )
    .setImage('https://media.tenor.com/images/28b60454008ba0a45bcd512264fb7c59/tenor.gif')
    .setFooter('be carefull ;)');

    message.channel.send(trollfaceEmbed);
    }
    
}