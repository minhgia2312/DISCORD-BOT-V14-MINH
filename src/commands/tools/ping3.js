const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gk')
    .setDescription('Invite everyone to playing games'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Game ko @everyone?`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};