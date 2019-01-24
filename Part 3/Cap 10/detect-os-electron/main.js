"use scrict";

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on("windows-all-close", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
