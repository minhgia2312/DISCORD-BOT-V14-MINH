const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ke')
    .setDescription('This Command has private message'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Không em =))`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};