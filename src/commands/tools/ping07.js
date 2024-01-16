const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('btchol')
    .setDescription('Check picture of online learning'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Bài học online đã được chụp ở trong chat học online :D`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};