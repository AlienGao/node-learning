'use strict';
const server = require('net').createServer(connection => {
  console.log('It is connected')

  const firstChunk = '{"type": "change", "timesta'
  const secondChunk = 'mpe": "1232132423"}\n'

  connection.write(firstChunk)

  const timer = setTimeout(() => {
    connection.write(secondChunk)
  }, 100)

  connection.on('end', () => {
    clearTimeout(timer)
    console.log('it is disconnected')
  })
})

server.listen(60300, function () {
  console.log('it is listening at 60300')
})
