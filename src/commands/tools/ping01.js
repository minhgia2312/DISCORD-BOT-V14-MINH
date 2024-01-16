const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rscj')
    .setDescription('Scared?'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Rén rồi thì nói đi cưng?`
        await interaction.editReply({
            content: newMessage
            
        });
    }
};