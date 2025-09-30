# Shopify Image Editor

A Shopify app for image editing built with Remix and Shopify App Bridge.

## Features

- Image editing capabilities for Shopify products
- Built with modern React and Remix framework
- Shopify Polaris design system integration
- Secure authentication with Shopify App Bridge

## Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- A Shopify Partner account
- ngrok for local development

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopify-image-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your Shopify app credentials:
   ```env
   SHOPIFY_API_KEY=your_api_key_here
   SHOPIFY_API_SECRET=your_api_secret_here
   SCOPES=write_products,read_products
   SHOPIFY_APP_URL=https://your-app-url.ngrok.io
   DATABASE_URL="file:./dev.sqlite"
   ```

5. Set up the database:
   ```bash
   npx prisma db push
   ```

6. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. In another terminal, start ngrok:
   ```bash
   ngrok http 3000
   ```

3. Update your `.env` file with the ngrok URL and restart the server.

## Scripts

- `npm run build` - Build the production version
- `npm run dev` - Start development server with Shopify CLI
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Project Structure

```
├── app/
│   ├── routes/           # Remix routes
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   ├── styles/          # CSS files
│   ├── root.tsx         # Root component
│   ├── shopify.server.ts # Shopify configuration
│   └── db.server.ts     # Database configuration
├── prisma/
│   └── schema.prisma    # Database schema
├── public/              # Static assets
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.