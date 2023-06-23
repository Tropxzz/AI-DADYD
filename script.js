document.addEventListener("DOMContentLoaded", function () {
  var botui = new BotUI("chatbot");

  // Bot introduction
  botui.message.add({
    content: "Hello! How can I assist you today?",
  });

  // User interaction
  botui.action.text({
    action: {
      placeholder: "Type your message here",
    },
  }).then(function (res) {
    botui.message.add({
      content: "You said: " + res.value,
    });

    // Further bot responses or actions based on user input
    // Add more botui.message.add and botui.action.* functions as needed
  });
});
