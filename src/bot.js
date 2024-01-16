require('dotenv').config();

const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require("fs");

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles) 
    require(`./functions/${folder}/${file}`)(client);
}
client.once("ready",()=>{

    //calling this function when bot will ready
    client.user.setActivity(`Watching 45 Members | /help để được chỉ bài`)
    })

client.handleEvents();
client.handleCommands();
client.login(token);