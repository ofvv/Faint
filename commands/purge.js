module.exports = {
    name: 'purge',
    description: "clears given amount of messages",
    async execute(message, args, client){
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You don't have perms to purge");
       if(message.member.permissions.has("ADMINISTRATOR")){

    if(!args[0]) return message.reply("Enter the amound of messages you want to clear!");
    if(isNaN(args[0])) return message.reply("Enter a real number u fucking idiot!");
    
    if(args[0] > 100) return message.reply("You can only clear 100 messages at a time.");
    if(args[0] < 1) return message.reply("You can't delete 0 messages, are you retarted?");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
    });
    }
    }
}