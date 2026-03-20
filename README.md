# ModernBlogging Platform 🚀

A highly modern, full-stack blogging platform engineered with clean architecture, speed, and premium aesthetics in mind. It features a complete `Node.js + Express + MongoDB` backend, and an ultra-responsive `Next.js + Tailwind CSS` frontend.

## Key Features
- **Stunning Glassmorphic Architecture:** Beautiful gradients, subtle blur layers, and dynamic shadows using Framer Motion.
- **RESTful API:** Scalable Express routes handling JWT Authentication, Role-based Access, CRUD for blogs, and nested comments.
- **Content Management:** Dedicated Admin and Author Dashboards.
- **SEO Ready:** Programmatically generated `sitemap.xml` and `robots.txt`.
- **Database Modularity:** Fully typed Mongoose schemas for `User`, `Post`, and `Comment`.

## Architecture Overview

The repository is modularized into two distinct applications:

1. **`/backend`**: Node.js REST API
   - `src/controllers/` - Business Logic
   - `src/models/` - Mongoose Schemas Database Models
   - `src/routes/` - Express Routing Definitions
   - `src/middlewares/` - Auth & JWT Protection
2. **`/frontend`**: Next.js (App Router)
   - `src/app/` - Page Routing and Server/Client Components
   - `src/components/` - Reusable UI components (Buttons, Cards)
   - `src/lib/` - Utilities

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Community Server running locally or an Atlas connection string.

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Edit the `.env` file if your MongoDB URI differs from `mongodb://localhost:27017/modern_blog`
4. Start the server: `npm start` or `node server.js`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Configure your API base URL if testing locally. (Default is typically handled relative to Next).
4. Start the development server: `npm run dev`

Navigate to `http://localhost:3000` to view the application in its full glory!
