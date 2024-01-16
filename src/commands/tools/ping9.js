const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hd')
    .setDescription('Learn Now!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Học Đi Chơi Chơi Cái giề? @everyone`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};