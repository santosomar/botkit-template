//
// Command: bingo - this is the corporate bullshit bingo card generator
//

//note this will be async


module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {

      function getRandomLine(filename){
        fs.readFile(filename, function(err, data){
          if(err) throw err;
          var lines = data.split('\n');
          /*do something with */
          data= lines[Math.floor(Math.random()*lines.length)];
       })

        var text = "Corporate BS BINGO!! Let's Play!";
        text += "\n" + "========================";
        text += "\n" + data ;

        bot.reply(message, text);

    });
   }
}
