// Global variables
var sessionID = new Date().getTime();

$.ajaxSetup({
    cache: true
});

var message = {
    sessionID: sessionID,
};

var settings = api_init(message);
$("#chat_input").prop('disabled', true);

$.ajax(settings).done(function (response) {

    var reply = response.reply;
    var emoji_code = response.emoji_code;
    
    var bot_word_amount = reply.split(' ').length;

    var typing_duration = bot_word_amount / 1.5 * 1000; // 40 words/min => 1.5s/word

    change_emoji(emoji_code);
    $('#typing').fadeIn('fast');

    // Typing
    console.log("Typing duration: " + (typing_duration / 1000).toFixed(3) + "s");
    setTimeout(function () {
        $('#typing').fadeOut('fast');
        console.log(response);

        $("#chat_input").prop('disabled', false);

        receive_message(reply);

    }, 0); // typing_duration

});