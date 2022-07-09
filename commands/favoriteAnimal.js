/* eslint-disable no-mixed-spaces-and-tabs */
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('favoriteanimal')
		.setDescription('Replies with your animal choice!')
		.addStringOption(option =>
			option.setName('animal')
				.setDescription('Your favorite animal!')
				.setRequired(true)
		        .addChoices(
			        { name: 'Dog', value: ':dog:' },
			        { name: 'Cat', value: ':cat:' },
			        { name: 'Frog', value: ':frog:' },
                    { name: 'Panda', value: ':panda:' },
		        ),
        ),
	async execute(interaction) {
		await interaction.reply('You chose:: ' + interaction.options.getString('animal'));
	},
};