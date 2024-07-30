module.exports = {
    name: "unmute",
    description: "mutes a user",
    execute(message, args, client){

     const target = message.mentions.users.first();
     if(!message.member.permissions.has("MUTE_MEMBERS")) return;
       if(message.member.permissions.has("MUTE_MEMBERS")){
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);

        }
        else{
            message.channel.send("can't unmute someone that doesn't exist!");
            }
        }
    }

}