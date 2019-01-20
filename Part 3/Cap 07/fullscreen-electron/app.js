const remote = require('electron').remote;

function toggleFullScreen() {
    const button = document.getElementById('fullscreen');
    const win = remote.getCurrentWindow();
    if (win.isFullScreen()) {
        win.setFullScreen(false);
    } else {
        win.setFullScreen(true);
        button.innerText = 'Exit full screen';
    }
}