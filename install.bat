@echo off
cmd /c npm install
IF NOT "%1"=="NOPAUSE" pause