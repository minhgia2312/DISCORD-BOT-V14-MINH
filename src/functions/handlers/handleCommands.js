const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require ('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandsFolders = fs.readdirSync('./src/commands');
        for (const folder of commandsFolders) {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter(file => file.endsWith('.js'));

        const { commands , commandArray } = client
        for (const file of commandFiles)   {
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
         } 

        }

        const clientId = "998439055538798632";
        const guildId = "875562981440782396";
        const rest = new REST({verions: '9' }).setToken(process.env.token);
        try {
            console.log('Started refreshing application (/) commands.');
    
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), 
            { body: client.commandArray,
        });
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    };
};