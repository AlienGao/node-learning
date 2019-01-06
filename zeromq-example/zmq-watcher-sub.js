'use strict';
const zmq = require('zeromq')

const subscribe = zmq.socket('sub')

// 表示接受任何信息
subscribe.subscribe('')

subscribe.on('message', data => {
  const message = JSON.parse(data)
  const time = new Date(message.time)
  console.log(`file ${message.file} is ${message.type} at ${time}`)
})

subscribe.connect('tcp://localhost:60400')