const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mdgr')
    .setDescription('Minh didnt old :P'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Minh đã già gòi :v`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};