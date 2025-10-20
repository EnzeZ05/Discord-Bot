/**
 * This file contains a personalized command for a member of the server.
 */
module.exports = {
    name: "pray",
    description: "",
    execute(message, args , client){
        userId = client.users.cache.get("207173567543115777"); ;
        message.channel.send("May Anemo God Fool You");
        message.channel.send("https://cdn.discordapp.com/emojis/771007037287039046.png?v=1");
    }
} 