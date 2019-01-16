'use strict';
const fileSystem = require('./fileSystem');
const userInterface = require('./userInterface');
const search = require('./Search');

function main() {
    userInterface.bindDocument(window);
    let folderPath = fileSystem.getUsersHomeFolder();
    // fileSystem.getFilesInFolder(folderPath,(err,files)=>{
    //     if(err){
    //         return alert('Sorry, you could not load your home folder');
    //     }
    //     fileSystem.inspectAndDescribeFiles(folderPath,files,userInterface.displayFiles);
    // });
    userInterface.loadDirectory(folderPath)(window);
    userInterface.bindSearchField((event) => {
        const query = event.target.value;
        if (query === '') {
            userInterface.resetFilter();
        } else {
            search.find(query, userInterface.filterResults);
        }
    });
}

window.onload = main;