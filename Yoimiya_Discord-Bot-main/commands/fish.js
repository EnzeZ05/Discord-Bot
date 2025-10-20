module.exports = {
    name: 'fish',
    description: "Genshin Fishing System",
    execute(message, args, client, Discord){        
        number = 20;        
        imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
        message.channel.send ( {files: ["./fishimages/" + imageNumber + ".png"]})
        return message.channel.send(`Yoimiya and you caught a fish <:867973805476315146:901302004444450866>`);
    }        
};
