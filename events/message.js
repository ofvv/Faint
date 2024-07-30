require('dotenv').config();
module.exports = async (client, message, args, Discord) => {
	const prefix = process.env.PREFIX;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();
	

	const command = client.command.get(cmd);

	let messageArray = message.content.split("")
	let args1 = messageArray.slice(1);

	if(command) command.execute(message, args, Discord, client);
}
