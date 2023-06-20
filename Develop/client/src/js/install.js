const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {  
    event.preventDefault(); // Prevent the default prompt from appearing
const deferredPrompt = event;
// Show the install button
butInstall.style.display = 'block';});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none'; // Hide the install button
    deferredPrompt.prompt(); // Show the installation prompt
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') {
      console.log('PWA installed');
    } else {
      console.log('PWA installation cancelled');
    }
  });


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed');
});
