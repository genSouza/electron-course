'use strict';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


//main listener 

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 200,
        minWidth:300,
        minHeight:150,
        maxWidth:600,
        maxHeight:450
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', () => {
        mainWindow = null; //destructor
    });


});