const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('851913267173261353').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check the rules channel.`);
});
    client.on('message', message =>{
        if (message.channel.id === '850969394283675659' || message.member.roles.cache.has('849135121670864897') ){
            if(!message.content.startsWith(prefix) || message.author.bot) return;
            if (message.member.roles.cache.has('850970450016206858') ){

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
                }else if(command == 'rules'){
                    client.commands.get('rules').execute(message,args,Discord)
                }else if(command == 'clear'){
                    client.commands.get('clear').execute(message,args,Discord)
                }else if(command == 'kick'){
                    client.commands.get('kick').execute(message,args,Discord)
                }else if(command == 'ban'){
                    client.commands.get('ban').execute(message,args,Discord)
                }else if(command == 'mute'){
                    client.commands.get('mute').execute(message,args,Discord)
                }else if(command == 'unmute'){
                    client.commands.get('unmute').execute(message,args,Discord)
                }else if(command == 'reactionrole'){
                    client.commands.get('reactionrole').execute(message,args,Discord, client)
                }
        }else{
            message.reply('You can not use the bot');
        }
    }    

});

client.login('ODQ5MTMyNjU2OTE4NTI4MDMw.YLWuaQ.02yK1HCV6TgrBK3bx_peHu9nvp4');