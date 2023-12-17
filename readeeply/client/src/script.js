// script.js
function sendToBackend() {
  var userInput = document.getElementById('userInput').value;
  fetch('http://localhost:5000/api/clova', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: userInput })
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('response').innerText = data;
  })
  .catch(error => console.error('Error:', error));
}
