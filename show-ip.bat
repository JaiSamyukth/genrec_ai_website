@echo off
echo ============================================
echo   MOBILE TESTING - YOUR LOCAL IP ADDRESS
echo ============================================
echo.
echo Finding your IPv4 address...
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set IP=%%a
    set IP=!IP: =!
    echo Your Local IP: !IP!
    echo.
    echo Access from mobile browser:
    echo http://!IP!:3000
    echo.
)

echo ============================================
echo.
echo Instructions:
echo 1. Make sure your mobile is on the same Wi-Fi
echo 2. Run: npm run dev:mobile
echo 3. Open the URL above on your mobile browser
echo.
echo Press any key to exit...
pause >nul
