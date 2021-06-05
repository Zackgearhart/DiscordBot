module.exports = {
    name: 'clear',
    description: 'clear messages using number',
    async execute(message,args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Please use a number.");
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages at a time.");
        if(args[0] < 1) return message.reply("You can't delete less than one message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply(args[0] + " message(s) have been deleted unless older than 14 days.");
        });

    }
}