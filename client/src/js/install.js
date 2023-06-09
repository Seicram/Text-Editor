const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Allows to show the install prompt

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default prompt
    deferredPrompt = event; // Store the event for later use
    // Show your custom install button or UI
    butInstall.style.display = 'block';
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the prompt to install the PWA
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
      } else {
        console.log('User dismissed the PWA installation');
      }
      deferredPrompt = null; // Reset the deferred prompt event
      // Hide your custom install button or UI
      butInstall.style.display = 'none';
    }
  });
  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully');
  });
