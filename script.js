function revealSecretMessage() {
    var secretMessage = "This is a secret message! 🎉";
    var messageList = document.getElementById("message-list");
    var newMessage = document.createElement("div");
    newMessage.textContent = secretMessage;
    messageList.appendChild(newMessage);
}
