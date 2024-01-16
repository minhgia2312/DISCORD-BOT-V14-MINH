const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gvs')
    .setDescription('Pro'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Ghe Vay Sao`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};