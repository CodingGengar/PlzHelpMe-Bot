const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ['GUILD_MEMBERS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_BANS', 'DIRECT_MESSAGE_TYPING', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'GUILD_PRESENCES', 'GUILD_WEBHOOKS'],
    partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION']
});

const prefix = '!';

require('dotenv').config();

client.login(process.env.BOT_TOKEN);


client.once('ready', () => {
    console.log('Plzhelpme is firing up');
});



// Role-Reaction Function

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();

    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;

    if (!reaction.message.guild) return;



    if (reaction.message.channel.id == '855451732304723999'){
        if (reaction.emoji.name == ':white_check_mark:'){
            await reaction.message.guild.members.cache

            .get(user.id)

            .roles.add('887633957267603476');
        }
        if (reaction.emoji.name == ':octagonal_sign:'){
            await reaction.message.guild.members.cache

            .get(user.id)

            .roles.add('887633996509491210');
        }

    } else return;

});






client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/+/);
    const command = args.shift().toLowerCase();

    
    



})