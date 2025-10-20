require("http").createServer((req, res) => res.end(process.version)).listen()
run = "npx node ."
const Discord = require('discord.js');
const DisTube = require('distube');
const client = new Discord.Client();
require('dotenv').config();
const mongoose = require('mongoose')


var axios = require('axios');
const prefix = '!';

const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
 
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected to the database");
})
.catch((err)=>{
    console.log(err);
});

const { token } = require('./config.js')

const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./app.js', {
  token,
  shardCount: 'auto',
});

shard.spawn('auto', 0 , -1);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));

//A set that will store users who have recently used a command.
//They will be blacks listed for 30 seconds to avoid spam.
const usedCommandRecently = new Set();


const commandsFiles = fs.readdirSync("./command.branches/commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles){
    const command = require(`./command.branches/commands/${file}`);

    client.commands.set(command.name, command)
}


client.on("message", message => {
    //Completely stop if the message doesn't start with a prefix or if the author is the bot.
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splice if you want to have multiple commands -- > !check wiki
    const args = message.content.slice(prefix.length).split(/ +/);
    //lower case the command to avoid errors.
    const command = args.shift().toLowerCase();
});


client.login("")