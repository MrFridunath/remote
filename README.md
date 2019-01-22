# INTEGRATION noVNC - Angular 7

## PRE REQUISITES

1. VNC SERVER on port localhost:vnc_port
2. WebSocket as Proxy from vnc_port to websocket_port (this project works with ssl only)
    For the websocket I use: https://github.com/novnc/websockify 
3. Put the password of the VNC Server in server/apps/app01/vnc-pass.data
4. The server.js server uses HTTP. You have to create a certificate with openssl or other and create a HTTPS server, or change the ssl only condition.

## INSTALL
```
npm install
```

## RUN
```
ng build && node server.js
```
