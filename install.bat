@echo off
echo ====================================
echo Genrec AI Website - Installation
echo ====================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Creating environment file...
if not exist .env.local (
    copy .env.example .env.local
    echo Created .env.local - Please update with your credentials
) else (
    echo .env.local already exists
)

echo.
echo ====================================
echo Installation complete!
echo ====================================
echo.
echo Next steps:
echo 1. Edit .env.local with your SMTP credentials
echo 2. Run 'npm run dev' to start development server
echo 3. Open http://localhost:3000
echo.
pause
