module.exports = async (client) =>{
    const guild = client.guilds.cache.get('716316807912226837');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('852677971025068032');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 600000);
}
 