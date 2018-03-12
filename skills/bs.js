
module.exports = function (controller) {

    controller.hears([/^bs$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('This is awesome...');

            convo.ask('How about this??', function (response, convo) {
                convo.say("Did you like it? '" + response.text + "' too!");
                convo.next();
            });
        });

    });
};
