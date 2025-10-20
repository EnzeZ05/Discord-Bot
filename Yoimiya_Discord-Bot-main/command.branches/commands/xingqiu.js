/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "xingqiu",
    description: "",
    execute(message, args){
        message.channel.send("https://pbs.twimg.com/media/EnGMD9ZWEAM5iOw?format=jpg&name=large"); 
    }
} 