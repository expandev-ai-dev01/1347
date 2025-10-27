# Password Generator Backend API

Backend API for the secure password generator system.

## Features

- RESTful API for password generation
- Password strength analysis
- Customizable password parameters
- CORS enabled for frontend integration
- TypeScript for type safety
- Express.js framework

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

Server will start on http://localhost:3000

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Password Generation (v1)
- `POST /api/v1/external/public/password/generate` - Generate password
- `POST /api/v1/external/public/password/analyze` - Analyze password strength

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
└── server.ts         # Application entry point
```

## Code Standards

- TypeScript strict mode enabled
- ESLint for code quality
- 2 spaces indentation
- Single quotes for strings
- Semicolons required

## License

ISC