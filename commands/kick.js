const { Message } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'check if person has ability to kick',
    execute(message,args){

    let mod = message.guild.roles.cache.find(r => r.id === "849814795917590588");

    console.log(message.member.user)

        if (message.member.hasPermission('KICK_MEMBERS')){
            message.channel.send('You can kick members').catch(console.error);
        } else{
            message.channel.send('You dont have that permission.')
        }
        
    }
}