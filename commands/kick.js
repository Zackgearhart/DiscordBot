module.exports = {
    name: 'kick',
    description: 'kicks a member',
    execute(message,args){
        const member = message.mentions.users.first();
        if (message.member.hasPermission('KICK_MEMBERS')){
            if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            message.reply(member.username + " has been kicked");
            memberTarget.kick();
            }else{
            message.reply('You can not kick that member');
            }
        }else{
            message.reply('You can not do that');
        }
    }
}