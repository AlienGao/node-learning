'use strict';
const netClient = require('net').connect({port: 60300})
const ldjClient = require('./lib/ldj-client.js').connect(netClient)

ldjClient.on('message', message => {
  if (message.type === 'watching') {
    console.log(`Now watching: ${message.file}`)
  } else if (message.type === 'change') {
    console.log(`Now changed: ${message.timestampe}`)
  } else {
    throw Error(`Unrecognized type: ${message}`)
  }
})