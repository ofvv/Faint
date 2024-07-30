const ms = require('ms');

module.exports = {
    name: "mute",
    description: "mutes a user",
    execute(message, args, client){
     const target = message.mentions.users.first();
     if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send('no perms to mute people');
     if (target.id === message.author.id) return message.channel.send("You cant mute yourself")
        if(message.member.permissions.has("MUTE_MEMBERS")){
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
            let memberTarget = message.guild.members.cache.get(target.id);


            if(!args[1]){
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`); 
            return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`); 

            setTimeout(function(){
            memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        }
        else{
            message.channel.send("can't mute someone that doesn't exist!");
            }
        }
    }

}