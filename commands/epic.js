module.exports = {
    name: 'epic',
    description: "this is a ping command!",
    execute(message, args, Discord, client){

    if(message.member.permissions.has("ADMINISTRATOR")){
        message.channel.send('Gamermoment!');
        }
        else{
            message.channel.send('No epicgamermoment for you bitch');
        }
        
    }
}