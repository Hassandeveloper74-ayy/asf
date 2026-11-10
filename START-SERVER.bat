@echo off
cd /d "%~dp0"
echo Server start ho raha hai... browser me http://localhost:3000 kholein
start "" http://localhost:3000
node server.js
pause
