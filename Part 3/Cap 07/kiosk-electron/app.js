const remote = require('electron').remote;

function toggleKiosk() {
    const button = document.getElementById('kiosk');
    const win = remote.getCurrentWindow();
    if (win.isKiosk()) {
        win.setKiosk(false);
    } else {
        win.setKiosk(true);
        button.innerText = 'Exit kiosk mode';
    }
}