# How to Run the Genrec AI Website

## Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## Installation

1. **Open Terminal/Command Prompt** in the project directory:
   ```bash
   cd D:\Files\genrec_ai_website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```

## Running the Development Server

Start the development server:
```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

## Available Commands

- **`npm run dev`** - Start development server (hot reload enabled)
- **`npm run build`** - Build for production
- **`npm start`** - Start production server (run `build` first)
- **`npm run lint`** - Check code quality
- **`npm run format`** - Format code with Prettier
- **`npm run type-check`** - TypeScript type checking
- **`npm test`** - Run tests

## Accessing Different Pages

Once running:
- **Homepage**: http://localhost:3000
- **LuminaIQ Product Page**: http://localhost:3000/products/lumina-iq
- **Contact**: http://localhost:3000/contact
- **About**: http://localhost:3000/about

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically try 3001, 3002, etc.

### Module Not Found
Run `npm install` again to ensure all dependencies are installed.

### Build Errors
Clear the cache and rebuild:
```bash
rm -rf .next
npm run build
```

## Production Build

To create an optimized production build:
```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory if you need environment variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Tech Stack
- **Next.js 14.0.3** - React framework
- **React 18.2** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety
