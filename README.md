# Neistesen Store - Full Stack E-Commerce

A modern, high-performance e-commerce platform built with the PERN stack and TypeScript. It features a curated catalog for hardware and workspace gear, secure checkout, and built-in order-scoped human support via chat and video.

## 🌍 Live Demo
[neistesen.onrender.com](https://neistesen.onrender.com/)

## 🚀 Tech Stack

### Frontend
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Tanstack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="Tanstack Query" />
</div>

### Backend & Integrations
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-C59762?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Stream-000000?style=for-the-badge&logo=stream&logoColor=white" alt="Stream Chat" />
  <img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" />
</div>

## ✨ Features

*   **Robust Authentication:** Secure user and admin authentication managed by Clerk.
*   **Database & ORM:** Type-safe database queries and schema management using PostgreSQL and Drizzle ORM.
*   **Advanced State Management:** Efficient client-side state handling with Zustand and TanStack Query.
*   **Human Support Integration:** Embedded real-time text chat and video calls for order support powered by Stream.
*   **Error Tracking & Profiling:** Comprehensive error monitoring and performance profiling with Sentry.
*   **Media Management:** Optimized image delivery and storage handled via ImageKit.
*   **Dockerized Deployment:** Ready for containerized deployment (e.g., Render) using the included Dockerfile.

## 🛠️ Prerequisites

*   Node.js (LTS version recommended)
*   PostgreSQL database instance
*   Accounts for Clerk, Stream, ImageKit, and Sentry

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/bayramovmurad/neistesen-store.git](https://github.com/bayramovmurad/neistesen-store.git)
   cd neistesen-store
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   DATABASE_URL=your_postgres_connection_url
   CLERK_SECRET_KEY=your_clerk_secret_key
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   SENTRY_DSN=your_sentry_dsn
   ```
   Push the schema to the database and start the server:
   ```bash
   npm run db:push
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_STREAM_API_KEY=your_stream_api_key
   VITE_SENTRY_DSN=your_sentry_dsn
   ```
   Start the frontend application:
   ```bash
   npm run dev
   ```

## ☁️ Deployment

This project is configured for deployment on **Render**. It includes a `Dockerfile` and `.dockerignore` for seamless containerized hosting, ensuring both the frontend and backend are served correctly. 

=
