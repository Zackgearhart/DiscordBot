const { Message } = require("discord.js");

module.exports = {
    name: 'bancheck',
    description: 'check if person has ability to ban',
    execute(message,args){

    let mod = message.guild.roles.cache.find(r => r.id === "849814795917590588");

        if (message.member.hasPermission('BAN_MEMBERS')){
            message.channel.send('You can ban members').catch(console.error);
        } else{
            message.channel.send('You dont have that permission.')
        }
        
    }
}