var messageInput = document.getElementById('message-input');
var sendButton = document.getElementById('send-button');
var chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', function() {
  var message = messageInput.value;
  if (message.trim() !== '') {
    appendMessage(message);
    messageInput.value = '';
  }
});

function appendMessage(message) {
  var messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}