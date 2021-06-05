module.exports = {
    name: 'ban',
    description: 'bans a member',
    execute(message,args){
        const member = message.mentions.users.first();
        if (message.member.hasPermission('BAN_MEMBERS')){
            if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            message.channel.send(member.username + " has been banned");
            memberTarget.ban();
            }else{
            message.channel.send('You can not ban that member');
            }
        }else{
            message.channel.send('You can not do that');
        }
    }
}