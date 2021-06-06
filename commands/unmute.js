module.exports = {
    name: 'unmute',
    description: 'unmute member command',
    execute(message,args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.reply(`${memberTarget.user.username} has been unmuted`);

        }else{
            message.channel.send('cant find that memeber');
        }
    }
}