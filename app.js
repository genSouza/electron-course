'use strict';

const async = require('async');
const osenv = require('osenv');
const fs = require('fs');
const path = require('path');

function getHomeUserFolder() {
    return osenv.home();
}

function getFilesInFolder(folderPath, cb) {
    fs.readdir(folderPath, cb); // cb-> call back
}

function inspectAndDescribeFile(filePath, cb) { //use the path module to get name for file
    let result = {
        file: path.basename(filePath),
        path: filePath,
        type: ''
    };

    //query object to find what type is it;
    fs.stat(filePath, (err, stat) => {
        if (err) {
            cb(err);
        } else {
            if (stat.isFile()) {
                result.type = 'file';
            }
            if (stat.isDirectory()) {
                result.type = 'directory';
            }
            cb(err, result);
        }
    });
}

function inspectAndDescribeFiles(folderPath, files, cb) {
    async.map(files, (file, asyncCb) => {

        //call asynchronous function 
        let resolvedFilePath = path.resolve(folderPath, file);
        inspectAndDescribeFile(resolvedFilePath, asyncCb);
    }, cb);
}

function displayFile(file) {
    const mainArea = document.getElementById('main-area');
    const template = document.querySelector('#item-template');
    let clone = document.importNode(template.content, true);
    clone.querySelector('img').src = `images/${file.type}.svg`;
    clone.querySelector('.filename').innerText = file.file;

    mainArea.appendChild(clone);
}


function displayFiles(err, files) {
    if (err) {
        return alert('Sorry,could not display your files');
    }
    files.forEach(displayFile);
}

function main() {
    const folderPath = getHomeUserFolder();
    getFilesInFolder(folderPath, (err, files) => {
        if (err) {
            return alert("Sorry, could not load your home folder");
        }
        inspectAndDescribeFiles(folderPath, files, displayFiles);
    });
}

main();