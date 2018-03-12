//
// Command: bingo - this is the corporate bullshit bingo card generator
//
module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {
      //note this may be async
     fs = require('fs')
     fs.readFile('words.txt', 'utf8', function (err,data) {
       if (err) {
         return console.log(err);
       }
       data = data.split('\n');




        var text = "C O R P   B S   B I N G O ! ! !";
        text += "\n- " + "========================";
        text += "\n- " + data ;

        bot.reply(message, text);

     });

    });
}
