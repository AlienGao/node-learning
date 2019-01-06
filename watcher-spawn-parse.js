const fs = require('fs')
const spawn = require('child_process').spawn
const fileName = process.argv[2]

if (!fileName) {
  throw Error('A file must be specified')
}
fs.watch(fileName, () => {
  const ls = spawn('ls', ['-l', '-h', fileName])
  let output = ''

  ls.stdout.on('data', chunk => output += chunk)

  ls.on('close', () => {
    const parts = output.split(/\s+/)
    console.log(parts[0], parts[4], parts[8])
  })
})
console.log(`Now watching ${fileName} is changing ...`)