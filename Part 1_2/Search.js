'use strict';
const lunr = require('lunr');
let index;


//reset search index
function resetIndex() {
    index = lunr(function () {
        this.field('file');
        this.field('type');
        this.ref('path');
    });
}

//Add file to index  for searching against
function addToIndex(file) {
    index.add(file);
}

//Query index for a given file 
function find(query, cb) {
    if (!index) {
        resetIndex();
    }

    const results = index.search(query);
    cb(results);
}

module.exports = {
    addToIndex,
    find,
    resetIndex
};