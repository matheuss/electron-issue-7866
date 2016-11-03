const path = require('path');

const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
	const window = new BrowserWindow({
		width: 500,
		height: 500,
		frame: false,
		show: false
	});
	window.loadURL(path.join('file://', __dirname, '/index.html'))

	window.on('ready-to-show', () => {
		window.show();
		window.setAlwaysOnTop(true, "screen-saver");
		window.setPosition(500, 0, true);
	});
});
