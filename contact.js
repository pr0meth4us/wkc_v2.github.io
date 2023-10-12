const form = document.querySelector('form.contact-form');
const params = require('./tokens.js');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const chatid = params.chat_id;
  const token = params.token;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=New%20contact%20form%20submission:%0AName:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
  let api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();
  console.log("wtv");
});