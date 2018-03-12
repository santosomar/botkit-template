//
// Command: bingo - this is the corporate bullshit bingo card generator
//
module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {


        var text = "C O R P   B S   B I N G O ! ! !";
        text += "\n- " + "========================";
        text += "\n- " + "testing some datadata" ;

        bot.reply(message, text);

     });

    });
}
