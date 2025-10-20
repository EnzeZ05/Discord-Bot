/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "klee",
    description: "",
    execute(message, args){
        message.channel.send("https://media.discordapp.net/attachments/782102798656339969/784238400236421120/tenor_2.gif");
        message.channel.send("https://pbs.twimg.com/media/EnGJHUAXMAIuzKD?format=jpg&name=large"); 
    }
} 