module.exports = {
    name: 'goat',
    description: "this shows a dancing goat",
    execute(message, args, Discord, client){
    const goatEmbed = new Discord.MessageEmbed()
    
    .setColor('#F50E0E')
    .setImage('https://i.pinimg.com/originals/88/a5/3c/88a53c9ec9fbb63d13d0517194e069c3.gif');
    message.channel.send(goatEmbed);
    }
}