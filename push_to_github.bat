@echo off
TITLE Deploy Cyber Law, Risk & Compliance Web App to GitHub
COLOR 0A
echo ========================================================================
echo   NFSU - Cyber Law, Risk and Compliance (Paper 1) TA2 Project
echo   Deploy to GitHub and Enable Free Live URL (GitHub Pages)
echo ========================================================================
echo.
echo Step 1: Make sure you have created an empty repository on GitHub.
echo         (Go to https://github.com/new and create a repository, e.g. "cyber-law-project")
echo.
echo Step 2: Paste your GitHub repository URL below.
echo         Example: https://github.com/yourusername/cyber-law-project.git
echo.
set /p REPO_URL="Enter GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo [!] No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo [+] Setting up Git remote origin...
cd /d "%~dp0"
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo [+] Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================================
    echo   [SUCCESS] Code successfully pushed to GitHub!
    echo ========================================================================
    echo.
    echo To get the LIVE URL for your teacher to click directly:
    echo  1. Open your repository on GitHub in your browser.
    echo  2. Click "Settings" (top right of the repo).
    echo  3. In the left sidebar, click "Pages".
    echo  4. Under "Build and deployment" -> "Branch", choose "main" and click "Save".
    echo  5. In 1 minute, GitHub will give you your live URL:
    echo     https://<your-username>.github.io/<your-repo-name>/
    echo.
    echo You can share that URL directly with your teacher!
    echo ========================================================================
) else (
    echo.
    echo [!] Push failed. Please check that:
    echo     1. The repository URL is correct.
    echo     2. You are logged into GitHub in Git credentials.
)

pause
