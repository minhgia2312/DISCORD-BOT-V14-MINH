const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rst')
    .setDescription('Rén sao tuấn?'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Rén sao em tuấn?`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};

