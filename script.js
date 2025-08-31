document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();

  if (message === '') return;

  appendMessage(message, 'user');
  input.value = '';
  scrollChatToBottom();

  // Bot response after 1 second
  setTimeout(() => {
    const botReply = generateBotReply(message);
    appendMessage(botReply, 'bot');
    scrollChatToBottom();
  }, 1000);
}

function appendMessage(text, sender) {
  const chatBox = document.getElementById('chatBox');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
}

function scrollChatToBottom() {
  const chatBox = document.getElementById('chatBox');
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(userMessage) {
  // Simple response logic
  const msg = userMessage.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) return "Hello! How can I help you today?";
  if (msg.includes("how are you")) return "I'm just a bot, but I'm doing fine!";
  if (msg.includes("bye")) return "Goodbye! Have a nice day.";
  if(msg.includes("where are you")) return "i am here"
  if(msg.includes ("thankyou")) return "always welcome"
    return "Sorry, I didn't understand that.";
}