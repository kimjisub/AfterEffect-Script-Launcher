# AfterEffect-Script-Launcher

Run your jsx code in Adobe After effect. Adobe After effect must be installed.

## Os supported

-   Windows

## Installation

```bash
$ npm i aftereffect-script-launcher
```

## Usage

### Generate JSX

```js
const AfterEffectScriptLauncher = require('aftereffect-script-launcher')()

let prefixCode = 'var data = [1,2,3,4]'

AfterEffectScriptLauncher.generate(
	prefixCode,
	'/path/to/input/script.jsx',
	'/path/to/output/script.jsx',
)
	.then(path => {
		console.log('jsx generate success')
	})
	.catch(err => {
		console.log('jsx generate fail')
		console.log(err)
	})
```

### Run JSX

```js
AfterEffectScriptLauncher.run('/path/to/script.jsx')
	.then(code => {
		console.log('jsx run success')
	})
	.catch(err => {
		console.log('jsx run fail')
		console.log(err)
	})
```
