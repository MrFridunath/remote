const fs = require('fs');
const net = require('net');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { spawn, exec } = require('child_process');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/remote')));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////       REMOTE        ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/app01/init' , function (req, res) {
	req.on('error', () => {
		res.status(400).end();
		return;
	});
	
	let remaining_process = 2;

	fs.readFile('server/apps/app01/vnc-pass.data', 'utf8', function (err1, data) {
		if (err1) {
			console.log(err1);
			res.status(500).send('{\"error\":\"there was an internal error\"}');
			return;
		}

		exec('tasklist /FI "IMAGENAME eq tvnserver.exe"', function (err2, stdout, stderr) {
			if (err2) {
				console.log(err2);
				res.status(500).send('{\"error\":\"there was an internal error\"}');
				return;
			}
			
			if (stdout.startsWith('INFO')) {
				let ps = spawn('tvnserver.exe', {
					cwd: 'C:/Program Files/TightVNC/',
					detached: true, 
					stdio: 'ignore'
				});
				
				ps.on('error', function (err) {
					console.log(err);
					res.status(500).send('{\"error\":\"there was an internal error\"}');
					return;
				});
				
				ps.unref();

				remaining_process = remaining_process - 1;

				if (remaining_process === 0) {
					res.status(200).send('{\"secret\": \"' + data + '\"}');
				}
			}
			else {
				remaining_process = remaining_process - 1;

				if (remaining_process === 0) {
					res.status(200).send('{\"secret\": \"' + data + '\"}');
				}
			}
			return;
		});

		exec('tasklist /FI "IMAGENAME eq python2.7"', function (err3, stdout, stderr) {
			if (err3) {
				console.log(err3);
				res.status(500).send('{\"error\":\"there was an internal error\"}');
				return;
			}
			
			if (stdout.startsWith('INFO')) {
				let ps = spawn('wsl', ['./run 5902 localhost:5901 --cert=./certificados/cert.pem --key=./certificados/key.pem --ssl-only'], {
					cwd: 'D:/node-workspace/websockify/',
					detached: true,
					stdio: 'ignore',
					shell: true,
					windowsHide: true
				});
				
				ps.on('error', function (err) {
					console.log(err);
					res.status(500).send('{\"error\":\"there was an internal error\"}');
					return;
				});
				
				ps.unref();

				remaining_process = remaining_process - 1;
			
				if (remaining_process === 0) {
					res.status(200).send('{\"secret\": \"' + data + '\"}');
				}
			}
			else {
				remaining_process = remaining_process - 1;
			
				if (remaining_process === 0) {
					res.status(200).send('{\"secret\": \"' + data + '\"}');
				}
			}
			return;
		});
		return;
	});
	return;
});

app.get( '**', function (req, res) {
	req.on('error', () => {
		res.status(400).end();
		return;
	});
	res.sendFile(path.join(__dirname, 'dist/servidor/index.html'));
	return;
});

http.createServer(app).listen(8080);
