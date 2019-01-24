'use strict';

function addStyleSheet(stylesheet) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${stylesheet}.css`);
    head.appendChild(link);
}

function labelOS(osName) {
    document.getElementById('os-label').innerText = osName;
}

function initialize() {
    const os = require('os');
    const platform = os.platform;
   
    const darwin = 'darwin';
    const linux = 'linux';
    const win32 = 'win32';

    if (platform == darwin) {
        addStyleSheet('Mac');
        labelOS('Mac OS');
    } else if (platform == linux) {
        addStyleSheet('linux');
        labelOS('Linux');

    } else if (platform == win32) {
        addStyleSheet('windows');
        labelOS('Microsoft Windows');
    } else {
        console.log('Could not detect OS for platform', platform);
    }
}

window.onload = initialize;