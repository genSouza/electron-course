'use strict';


const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const BrowserWindow = electron.BrowserWindow;

//javascript
let appIcon = null;
let mainWindow = null;

const notes = [{
        title: 'todo list',
        contents: 'grocery shopping\npick up kids \nsend birthday party invites'
    },
    {
        title: 'Grocery list',
        contents: 'Milk\nEggs\nButter\Double Cream'
    },
    {
        title: 'Birthday invites',
        contents: 'Dave\nSue\nSally\nJhon and Joanna\nChris and Georgina\nElliot'
    }
];

//sent note from the back to front end
function displayNote(note) {
    mainWindow.webContents.send('displayNote', note);
}

function addNoteToMenu(note) {
    return {
        label: note.title,
        type: 'normal',
        click: () => {
            displayNote(note);
        }
    };
}

app.on('ready', () => {
    appIcon = new Tray('favicon(1).ico');
    let contextMenu = Menu.buildFromTemplate(notes.map(addNoteToMenu));
    appIcon.setToolTip('Notes app');
    appIcon.setContextMenu(contextMenu);

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.webContents.on('dom-ready', () => {
        displayNote(notes[0]);
    });
});