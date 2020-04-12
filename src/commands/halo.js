const ytdl = require('ytdl-core');

module.exports = async (msg) => {
    if(msg.member.voice.channel) {
        let voiceChannel = msg.member.voice.channel;
        const connection = await voiceChannel.join();
        connection.play(ytdl('https://www.youtube.com/watch?v=0jXTBAGv9ZQ', { filter: 'audioonly' }));
    } else {
        message.reply('You need to join a voice channel first!');
    }          
}