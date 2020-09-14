const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzEzNjM0NDY5Nzg1MTA4NTAx.Xsi95A.p4yVUpnOXM0SevL_RqwN4iokI_A);//BOT_TOKEN is the Client Secret
