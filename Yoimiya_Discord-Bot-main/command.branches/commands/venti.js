/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "venti",
    description: "",
    execute(message, args){
        message.channel.send("https://pbs.twimg.com/media/Enojft-XUAMzVtH?format=jpg&name=large");
        
    }
}