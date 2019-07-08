@echo off
cmd /c npm start
IF NOT "%1"=="NOPAUSE" pause