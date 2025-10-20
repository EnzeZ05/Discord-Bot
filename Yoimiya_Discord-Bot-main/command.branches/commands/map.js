/**
 * File that contains a command that will send a message with a link to the interactive map of genshin impact.
 */
module.exports = {
    name: "map",
    description: "",
    execute(message, args){
        message.channel.send("The interactive map of Genshin -- > https://genshin-impact-map.appsample.com/#/");
    }
}