const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('vh')
    .setDescription('This Command has private message'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Vào Học @everyone`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};