module.exports = {
    name: 'ping',
    description: "shows the latency of the bot",
    execute(message, args, client){
        
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        if(message.member.permissions.has("ADMINISTRATOR")){
            message.channel.send(`bot's latency is: ` + "`" + Math.round(client.ws.ping) + " ms`");
        } else {
            message.channel.send('`Owner use only, please refrain from using this!`')
        }
    }
}