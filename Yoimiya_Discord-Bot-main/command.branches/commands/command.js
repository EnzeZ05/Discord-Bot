/**
 * List of all the commands for the bot.
 * Author: David Jule
 * Date: December 13th.
 * 
 * 
 * A message in a code-block format is sent where it displays all the commands for the bot.
 */
module.exports = {
    name: "command",
    description: "All of the commands for the bot. This needs to be constantly updated.",
    execute(message, args){
        let mensaje = 
`Command list:
[To use a combine command "--" plus one of the commands mentioned at the bottom.]
Comandos:
["Permanent link of the Server"] ---> "permalink"
["Genshin interactive map"] ---> "map"
["Abyss Spiral Guide Level 9-12"] ---> "spiral"
[Character information]
"sugar"
"beidou" 
"bennett" 
"diluc"
"diona"
"jean"
"keqing"
"klee"
"ninguang"
"razor"
"razor2"
"tartaglia"
"venti"
"xiangling"
"xingqiu"
"zhongli"
`;
        let codeBlockInitiator = "```css\n" + mensaje + "\n```"; 
        message.channel.send(codeBlockInitiator);
    }
} 