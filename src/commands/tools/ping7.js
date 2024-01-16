const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('non')
    .setDescription('Noob'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Nonnnnnnnnn`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};