//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here is your corporate BS bingo card:";
        text += "\n- " + "this may not work";
        text += "\n- " + "Generates random Corporate BS statement";

        bot.reply(message, text);
    });
}
