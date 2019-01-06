'use strict';
const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn
const fileName = process.argv[2]
try {
  fs.statSync(path.join(__dirname, fileName))
  fs.watch(fileName, (eventType, file) => {
    if (eventType === 'rename') {
      console.log(`${file} renamed`)
    } else {
      console.log(`${file} changed`)
    }
  })
} catch(e) {
  console.log('error')
}
console.log('Now watching target.txt for changing ...')