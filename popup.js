const requestBtn = document.getElementById('request-button');
const response = document.getElementById('response');

requestBtn.addEventListener('click', () => {
  // Send request to background.js
  chrome.runtime.sendMessage('', {
    type: 'request'
  });
});


// Listen to response from background.js
chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'response') {
    response.src = data.content;
  }
});