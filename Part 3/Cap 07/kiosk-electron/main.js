'use strict';

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let MainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('ready', () => {
    //MainWindow = new BrowserWindow({kiosk:true});
    MainWindow = new BrowserWindow();
    MainWindow.loadURL(`file://${__dirname}/index.html`);
    MainWindow.on('closed', () => {
        MainWindow = null;
    });
});