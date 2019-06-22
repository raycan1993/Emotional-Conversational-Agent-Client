// Variables
var current_emoji = '';

// SEND MESSAGE BUTTON CLICK ===============================
$(document).on('click', '#chat_input_btn', function () {
    send_message();
});

// SEND MESSAGE ENTER PRESSED  ===============================
$(document).on('keypress', function (event) {
    if (event.which == 13) {
        send_message();
    }
});

$('#send_btn').on('click', function () {
    send_message();
});


$('#reset-btn-container').on('click', function () {

    var settings = api_reset(message);
    $("#chat_input").prop('disabled', true);

    $.ajax(settings).done(function (response) {

        $('.message').each(function(){
            $(this).fadeOut('fast', function(){
                $(this).remove();
            });
        });

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
    
        }, typing_duration);     
    });

});

function display_message(data, message,type) {
    // Display message
    if ($('#message_template').length == 0) $('#templates').append($.parseHTML(data));
    var message_template = _.template($('#message_template').html());

    message['type'] = type;

    $("#chat-window").append(message_template(message));
    $("#chat_input").val('');

    var scroll_height = $('#chat-window')[0].scrollHeight;
    $('#chat-window').animate({ scrollTop: scroll_height }, 1000);
}

function send_message() {
    var message = sanitize($('#chat_input').val());
    if (message === '') return;
    var message = {
        content: message,
        sessionID: sessionID,
    };

    // Display message
    $.get('templates/message.html', function (data_message) {
        display_message(data_message, message, 'sent');
    });

    // POST Request for adding a message to a specific job --------------------
    var settings = api_create_message(message);

    console.log(message);

    $.ajax(settings).done(function (response) {

        // RESPONSE ----------------------------------------------------------

        var reply = response.reply;
        var emoji_code = response.emoji_code;

        var user_word_amount = message.content.split(' ').length;
        var bot_word_amount = reply.split(' ').length;

        var reading_duration = user_word_amount * 0.2899 * 1000; // 207 words/min => 0.2899s/word
        var reaction_duration = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
        var typing_duration = bot_word_amount * 1.5 * 1000; // 40 words/min => 1.5s/word

        $("#chat_input").prop('disabled', true);

        // Reading
        console.log("Reading duration: " + (reading_duration / 1000).toFixed(3) + "s");
        setTimeout(function () {

            change_emoji(emoji_code);

            // Reacting
            console.log("Reaction duration: " + (reaction_duration / 1000).toFixed(3) + "s");
            setTimeout(function () {
                $('#typing').fadeIn('fast');

                // Typing
                console.log("Typing duration: " + (typing_duration / 1000).toFixed(3) + "s");
                setTimeout(function () {
                    $('#typing').fadeOut('fast');
                    console.log(response);

                    $("#chat_input").prop('disabled', false);

                    receive_message(reply);

                }, typing_duration); 
            }, reaction_duration); 
        }, reading_duration); 



    });
}

function receive_message(reply) {
    if (reply === '') return;
    var datetime = getCurrentDatetime();
    var message = {
        content: reply,
        datetime: datetime
    };

    $.get('templates/message.html', function (data_message) {
        display_message(data_message, message, 'received');
    });
}

var getCurrentDatetime = function () {
    return new Date($.now());
};

function change_emoji(emoji_code) {    
    var emoji = $('#emoji');

    if(emoji_code != current_emoji){
        emoji.fadeOut('fast', function () {
            emoji.html(emoji_code);
            emoji.fadeIn('fast');
        });
        current_emoji = emoji_code;
    }    
}

function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        ';': '&#59;',
        '%': '&#37;',
        '(': '&#40;',
        ')': '&#41;',
        '[': '&#91;',
        ']': '&#93;',
    };
    const reg = /[&<>"'/;%()[\]]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }