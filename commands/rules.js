module.exports = {
    name: 'rules',
    description: 'embeds',
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://stopgoosehound.com')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'be nice'},
            {name: 'Rule 2', value: 'follow goosehound'},
            {name: 'Rule 3', value: 'love u'}
        )
        .setImage('https://f4.bcbits.com/img/0013974919_10.jpg')
        .setFooter('Check out the rules channel')
        message.channel.send(newEmbed)

    }
}