const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cd')
    .setDescription('This Command has private message'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Cuts dumf`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};