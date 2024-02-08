function addMessage() {
    var message = document.getElementById("message-input").value;
    if (message.trim() !== "") {
        var messageList = document.getElementById("message-list");
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        document.getElementById("message-input").value = "";
    } else {
        alert("Please enter a message.");
    }
}