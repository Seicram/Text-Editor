const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {  
    event.preventDefault(); // Prevent the default prompt from appearing
    window.deferredPrompt = event; // Store the triggered event
    butInstall.style.display = 'block'; // Show the install button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none'; // Hide the install button
    const promptEvent = window.deferredPrompt;
    if (promptEvent) {
        promptEvent.prompt(); // Show the installation prompt
        const result = await promptEvent.userChoice;
        if (result.outcome === 'accepted') {
            console.log('PWA installed');
        } else {
            console.log('PWA installation cancelled');
        }
        window.deferredPrompt = null; // Reset the deferred prompt variable
    }
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed');
});
