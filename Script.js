let messages = JSON.parse(localStorage.getItem("chat")) || [];

function showMessages() {
  const box = document.getElementById("messages");
  box.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message " + msg.type;
    div.innerText = msg.text;
    box.appendChild(div);
  });

  box.scrollTop = box.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();

  if (!text) return;

  messages.push({ text: text, type: "me" });
  input.value = "";
  saveAndRender();

  setTimeout(() => autoReply(text), 800);
}

function autoReply(userText) {
  let replies = [
    "Hmm interesting 🤔",
    "Nice 👍",
    "Tell me more...",
    "I understand 🙂",
    "That's cool 😎",
    "Really?? 😲"
  ];

  let reply = replies[Math.floor(Math.random() * replies.length)];

  messages.push({ text: reply, type: "bot" });
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("chat", JSON.stringify(messages));
  showMessages();
}

showMessages();
