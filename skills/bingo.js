//
// Command: bingo - this is the corporate bullshit bingo card generator
//

//note this will be async


module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {

      function getRandomLine(words){
        fs.readFile(words, function(err, data){
          if(err) throw err;
          var lines = data.split('\n');

       })
   }

        var text = "Corporate BS BINGO!! Let's Play!";
        text += "\n" + "========================";
        text += "\n" + lines ;

        bot.reply(message, text);

    });

}
