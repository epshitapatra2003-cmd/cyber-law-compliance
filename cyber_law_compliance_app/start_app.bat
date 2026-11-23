@echo off
TITLE Cyber Law, Risk and Compliance - TA2 Localhost App
COLOR 0B
echo ========================================================================
echo   Launching Cyber Law, Risk and Compliance Web Application...
echo   Semester 5 Forensic Science (Cybersecurity Specialization)
echo   National Forensic Sciences University (NFSU)
echo ========================================================================
echo.

cd /d "%~dp0"

where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [+] Python found. Starting local HTTP server...
    python server.py
) else (
    echo [!] Python is not in PATH. Launching web app directly in default browser...
    start "" "%~dp0index.html"
)

pause
