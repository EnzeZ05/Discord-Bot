module.exports = {
    cooldown: 86399,
    name: 'dailywaifu',
    description: "This command sends an image of dailywaifu",
    execute(message, args, client, Discord){        
        number = 2;        
        imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
        message.channel.send ( {files: ["./waifuimages/" + imageNumber + ".png"]})
    }       
};