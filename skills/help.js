//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Don't abuse me... Here are my skills:";
        text += "\n- " + bot.appendMention(message, "bingo") + ": this will generate a random corporate BS bingo card";
        text += "\n- " + bot.appendMention(message, "bs") + ": (coming soon) Generates random Corporate BS statement";
        text += "\n- " + bot.appendMention(message, "help") + ": you are already here dummy!!!";
        bot.reply(message, text);
    });
}
