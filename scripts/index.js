document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  let isEnabled = false;

  toggleButton.addEventListener('click', function() {
    isEnabled = !isEnabled;
    toggleButton.textContent = isEnabled ? 'Disable Keyboard Detection' : 'Enable Keyboard Detection';
    toggleButton.classList.toggle('off', !isEnabled);

    // Send a message to the background script to enable/disable keyboard detection
    chrome.runtime.sendMessage({ action: isEnabled ? 'enable' : 'disable' });
  });
});