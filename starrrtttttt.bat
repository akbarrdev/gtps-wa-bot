@echo off
title Runaway Bot
color a
cls
pm2 start index.js && pm2 save && pm2 logs
pause
