const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ppdn')
    .setDescription('time to sleep'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Pái Pai đi ngủ đây :P`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};