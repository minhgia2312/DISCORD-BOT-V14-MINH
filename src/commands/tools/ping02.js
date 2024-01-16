const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rsc')
    .setDescription('This Command has private message'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Rén Sao Chị?`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};