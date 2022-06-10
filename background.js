
// Listen to request from popup.js
chrome.runtime.onMessage.addListener(async data => {
  if (data.type === 'request') {
    // URL is defined in manifest.json -> host_permissions
    const response = await fetch("https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg");
    const content = await response.blob();

    // Blob to Base64
    const reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onloadend = () => {
      const base64Img = reader.result;

      // Send result back to popup.js
      chrome.runtime.sendMessage("", { type: "response", content: base64Img });
    }
  }
});