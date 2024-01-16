const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('e')
    .setDescription('Tags Everyone'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `@everyone`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};