const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('qs')
    .setDescription('Emergency Call'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Quản sinh trong lớp @everyone`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};