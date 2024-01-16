const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Call The Owner If You Are Enough Levels To Get The New Role!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `***Can you give me the role? @everyone***`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};