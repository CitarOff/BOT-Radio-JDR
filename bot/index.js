///////////////////////////////////////////////
/////////////////// DEV BY ///////////////////
////////////// 		CITAR		/////////////
/////////////////// !!!!! //////////////////
///////////////////////////////////////////


const Discord = require("discord.js");
const config = require('../config.js');
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Le bot est démarré !");
});
  

client.on("message", (message) => {
	var channelmjdiscord = client.channels.get(config.channelmj);

//Verification prefix
	if(message.content[0] === config.prefix) {
		let spliteMessage = message.content.split(' _ ');
	// Commande de test pour verifier que le bot est bien en route
		if (spliteMessage[0] === config.prefix + "ping") {
			message.delete()
			return message.reply("pong (0 inspi ^^)")
		}

	//Commandes
		else if (spliteMessage[0] === config.prefix + "help") {
			message.delete()
			return message.reply("Pour envoyé un message radio : ```!radio _ @nomdestinataire _ date _ Message a ecrire ``` autres commandes ``` !help   !ping ```")
		}
		
	// Commande d'envoie de message radio
		else if (spliteMessage[0] === config.prefix + "radio") {
			if(spliteMessage.length === 4) {
				message.delete()
				let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(spliteMessage[1]);
				channelmjdiscord.send(`${message.author}  à : ${spliteMessage[1]} le : ${spliteMessage[2]} Message : ${spliteMessage[3]}`);
				dUser.send(`${message.author}  à : ${spliteMessage[1]} le : ${spliteMessage[2]} Message : ${spliteMessage[3]}`);
			}
			else {
				return message.reply("Il manque un paramètre ! ```!radio _ @nomdestinataire _ date _ Message a ecrire ``` N'oubliez pas les espaces entres les _ ")
			}
			
		}
	}
});

client.login(config.idbot);



///////////////////////////////DEV BY CITAR///////////////////////////////////////////////////