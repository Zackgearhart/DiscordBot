module.exports = {
    name: 'reactionrole',
    description: 'set up a reaction role',
    async execute(message,args, Discord, client){
        const channel = '852378280622555156';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red Team");

        const yellowTeamEmoji = '🍋';
        const redTeamEmoji = '🔥';

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Choose your team!')
        .setDescription('Choosing a team will allow you to have a cool color with your teammates!\n\n'
        +`${yellowTeamEmoji} for yellow team\n`
        +`${redTeamEmoji} for red team`
        );

        let messageEmbed = await message.channel.send(newEmbed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(redTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === yellowTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if(reaction.emoji.name === redTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
            }else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === yellowTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if(reaction.emoji.name === redTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
            }else {
                return;
            }
        });

    }
}