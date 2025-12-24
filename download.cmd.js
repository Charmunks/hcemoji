const fs = require('fs');
const { pipeline } = require('stream/promises');

async function downloadFile(url, path) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch emoji. Status: ${response.status}`);
    }

    if (response.body) {
      await pipeline(response.body, fs.createWriteStream(path));
      console.log(`Emoji downloaded successfully to ${path}`);
    } else {
      throw new Error('Response body is null or undefined.');
    }

  } catch (error) {
    console.error('Download error:', error);
  }
}

function download(emojiname, path){
    const imageUrl = `https://cachet.dunkirk.sh/emojis/${emojiname}/r`
    downloadFile(imageUrl, path)
}

module.exports = { download };


