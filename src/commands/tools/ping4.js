const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mhcj')
    .setDescription('Ask someone to know what are we learning tomorrow'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Mai học cái gì?:)`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};