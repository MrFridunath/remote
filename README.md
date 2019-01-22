# INTEGRATION noVNC - Angular 7

## PRE REQUISITES

1. Run a VNC server (I use TightVNC) and put a password (this is optional, but in the project a password is used).
2. For noVNC, you need a web socket as a proxy between the VNC server and the remote host. For the websocket I use: https://github.com/novnc/websockify and the server runs a Linux Shell from Windows with Windows Subsystem for Linux. In the project I use ssl ony.
3. Put the password of the VNC server in server/apps/app01/vnc-pass.data.
4. The server.js file, uses a HTTP server. You have to create a certificate with openssl for example, and create a HTTPS server, or change the ssl only condition in the project.

## INSTALL
```
npm install
```

## RUN
```
ng build && node server.js
```
