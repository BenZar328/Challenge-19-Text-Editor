const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // This will hold the beforeinstallprompt event

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();

  // Store the event object for later use
  deferredPrompt = event;

  // Show the installation button (you can modify your UI here)
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User declined the PWA installation');
    }

    // Clear the deferredPrompt variable
    deferredPrompt = null;

    // Hide the installation button (you can modify your UI here)
    butInstall.style.display = 'none';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // The PWA was successfully installed
  console.log('PWA installed successfully!');
});
