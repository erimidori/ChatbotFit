const YouTube = require('youtube-node');
const config = require('./yt-config'); //Nome do arquivo que conterá a credencial do Youtube

const youtube = new YouTube();
youtube.setKey(config.key);

function searchVideoURL(message, queryText) {
    return new Promise((resolve, reject) => {
        youtube.search(`Exercício em casa ${queryText}`, 5, function(error, result) {
            if(!error) {
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
                resolve(`${message}\n ${youtubeLinks.join(`,\n`)}`);
            } else {
                reject('Deu erro');
            }
        });
    });
};

module.exports.searchVideoURL = searchVideoURL;
