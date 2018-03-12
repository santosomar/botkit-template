//
// Command: bingo - this is the corporate bullshit bingo card generator
//
module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {

        var data = "this is a test";
        var text = "C O R P   B S   B I N G O ! ! !";
        text += "\n- " + "========================";
        text += "\n- " + data ;

        bot.reply(message, text);

    });
}
