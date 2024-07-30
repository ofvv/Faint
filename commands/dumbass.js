module.exports = {
    name: 'dumbass',
    description: "give you the dumbass role",
    execute(message, args, client){
        // the role

    let dumbassRole = message.guild.roles.cache.find(role => role.name === 'dumbass');
    
    if(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.cache.has(dumbassRole.id)){
        message.channel.send('dumbass!');
        
        }
        else{
            message.channel.send('You are not a dumbass yet, but dont worry i gotchu.');
            message.member.roles.add(dumbassRole.id).catch(console.error);
        }
        
    }
}