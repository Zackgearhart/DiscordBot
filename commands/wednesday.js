module.exports = {
    name: 'wednesday',
    description: 'wii shop wednesday command',
    execute(message,args){

    let mod = message.guild.roles.cache.find(r => r.id === "849839354117619722");

        if(message.member.roles.cache.has('849839354117619722')){

            message.channel.send('https://youtu.be/B_qnI1WrlnU')
            message.member.roles.remove(mod).catch(console.error)

        } else {
            message.channel.send('lets fix the permissions')
            message.member.roles.add(mod).catch(console.error)
        }
    }
}