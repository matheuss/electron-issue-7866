const path = require('path');

const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {
	const window = new BrowserWindow({
		width: 250,
		height: 250,
		frame: false,
		show: false,
		enableLargerThanScreen: true
	});
	window.loadURL(path.join('file://', __dirname, '/index.html'))

	function setPosition() {
		const x = window.getPosition()[0];
		window.setPosition(x, 0, true);
	}

	window.on('ready-to-show', () => {
		window.show();
		window.setAlwaysOnTop(true, "screen-saver");
		setPosition();
	});

	ipcMain.on('double click', setPosition);
});
