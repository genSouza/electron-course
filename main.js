'use strict';

//electron imports
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
let mainWindow = null;

//app event listener
app.on('window-all-closed', () => {
    //quit when all windows are closed, except for macOSX
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//create new window
app.on('ready', () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(path.join(__dirname, 'index.html'));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

});