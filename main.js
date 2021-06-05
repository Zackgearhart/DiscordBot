const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log ('bot is ready!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }else if (command == 'wednesday'){
        client.commands.get('wednesday').execute(message,args);
    }else if(command == 'bancheck'){
        client.commands.get('bancheck').execute(message,args,Discord)
    }else if(command == 'kickcheck'){
        client.commands.get('kickcheck').execute(message,args,Discord)
    }else if(command == 'command'){
        client.commands.get('command').execute(message,args,Discord)
    }else if(command == 'clear'){
        client.commands.get('clear').execute(message,args,Discord)
    }else if(command == 'kick'){
        client.commands.get('kick').execute(message,args,Discord)
    }else if(command == 'ban'){
        client.commands.get('ban').execute(message,args,Discord)
    }

});

client.login('ODQ5MTMyNjU2OTE4NTI4MDMw.YLWuaQ.02yK1HCV6TgrBK3bx_peHu9nvp4');