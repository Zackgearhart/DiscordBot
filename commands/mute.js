const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mute member command',
    execute(message,args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.reply(`${memberTarget.user.username} has been muted`);
                return;
            }
        try {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.reply(`${memberTarget.user.username} has been muted for ${ms(ms(args[1]))}`);
            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
        }, ms(args[1]));}catch(error){
            console.log('ERROR: no number used for time out command');
        }finally{
            message.reply(args[1] + ' is not a number, use a number.');
            return;
        }
        }else{
            message.channel.send('cant find that user.');
            return;
        }
    }
}