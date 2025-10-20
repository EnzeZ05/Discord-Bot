/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "bennett",
    description: "",
    execute(message, args){
        message.channel.send("https://pbs.twimg.com/media/EnGJHT-WMAAYhH3?format=jpg&name=large"); 
    }
} 