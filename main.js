'use strict';

//load electron 
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

let mainWindow = null;

//close event listener
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(path.join(__dirname, 'index.html'));
    mainWindow.on('close', () => {
        mainWindow = null;
    });
});

