# Custom CMS with Block-Based Editor

A modern content management system built with Next.js, featuring a block-based editor powered by Tiptap.

## Features

- Block-based content editing with Tiptap
- Real-time content preview
- User authentication and authorization
- MongoDB database integration
- Version control for content
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 13+ (App Router)
- **Editor**: Tiptap
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **TypeScript**: For type safety

## Prerequisites

- Node.js 16.8 or later
- MongoDB instance
- npm or yarn

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd custom-cms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/custom-cms
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
custom-cms/
├── src/
│   ├── app/                 # Next.js 13 app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   └── editor/         # Editor pages
│   ├── components/         # React components
│   │   ├── editor/        # Editor components
│   │   └── ui/            # UI components
│   └── lib/               # Utility functions and configurations
│       ├── models/        # MongoDB models
│       ├── utils/         # Helper functions
│       └── auth.ts        # NextAuth configuration
├── public/                # Static files
└── package.json          # Project dependencies
```

## Development

- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Run tests: `npm test`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 