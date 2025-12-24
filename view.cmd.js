const asciify = require('asciify-image');

function ascii(emoji){

    var options = {
        fit:    'box',
        width:  25,
        height: 25
    }

    asciify(emoji, options, function (err, asciified) {
        if (err) throw err;
        console.log(asciified)
        return asciified
    });
}

function viewEmoji(emojiname){
    const imageUrl = `https://cachet.dunkirk.sh/emojis/${emojiname}/r`
    const emoji = ascii(imageUrl)
}

module.exports = { viewEmoji };
