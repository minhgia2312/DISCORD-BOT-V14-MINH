const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cuu')
    .setDescription('Cứu :(('),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Cứu T @everyone :((`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};