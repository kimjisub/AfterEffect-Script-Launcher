const fs = require('fs-extra')
const { exec } = require('child_process')

let config = {
	adobePath: 'C:/Program Files/Adobe/',
	afterfxPath: findAEPath(),
}

let child_process

module.exports = userConfig => {
	config = Object.assign(config, userConfig)

	return {
		generate: (prefixCode, jsxInput, jsxOutput) =>
			new Promise((resolve, reject) => {
				try {
					jsxInput = jsxInput.replace(/\\/gi, '/')
					jsxOutput = jsxOutput.replace(/\\/gi, '/')

					fs.writeFileSync(jsxOutput, prefixCode + '\n', 'utf-8')

					let jsxInputStream = fs.createReadStream(jsxInput)
					let jsxOutputStream = fs.createWriteStream(jsxOutput, { flags: 'a' })

					jsxInputStream
						.on('data', chunk => {
							jsxOutputStream.write(chunk)
						})
						.on('end', () => {
							jsxOutputStream.end()
						})
					return resolve(jsxOutput)
				} catch (err) {
					return reject(err)
				}
			}),
		run: jsxPath =>
			new Promise((resolve, reject) => {
				try {
					jsxPath = jsxPath.replace(/\\/gi, '/')

					let command = `"${config.afterfxPath}" -r ${jsxPath}`

					child_process = exec(command)

					/*child_process.stdout.on('data', (data) => {
						console.log('stdout: ' + data)
					})
			
					child_process.stderr.on('data', (data) => {
						console.error('stderr: ' + data)
					})*/

					child_process.on('exit', code => {
						return resolve(code)
					})
				} catch (err) {
					return reject(err)
				}
			}),
	}
}

function findAEPath() {
	let adobePath = 'C:/Program Files/Adobe/'

	let aeList = fs
		.readdirSync(adobePath)
		.filter(name => name.includes('After Effects'))
		.reverse()

	if (aeList.length == 0) return null
	else return `${adobePath}${aeList[0]}/Support Files/afterfx.exe`
}
