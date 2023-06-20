const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt behavior
  event.preventDefault();
  // Store the event for later use
  window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;

  // Show the install prompt
  promptEvent.prompt();

  // Wait for the user to respond to the prompt
  const result = await promptEvent.userChoice;
  console.log(result);

  // Clear the saved prompt since it can't be used again
  window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('Jate was installed', event);
});
