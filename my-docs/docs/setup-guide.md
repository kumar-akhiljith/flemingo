---
sidebar_position: 1
title: Setup Guide
---

# Setup Guide (incomplete)

This page describes how to clone the project, install dependencies, configure essential services, and run both the documentation site and the application codebase.

## Requirements

- Node.js 20+
- npm
- Git
- A Firebase project (for phone authentication)
- MongoDB Atlas account
- Redis instance (local or cloud)
- AWS S3 bucket (for profile images)
- Expo account (for mobile builds)

## 1. Clone the Repository
```bash

git clone https://github.com/kumar-akhiljith/flemingo.git
cd flemingo
```

## 2. Install Dependencies

The project contains multiple subdirectories, such as:

- /mobile (React Native client)
- /backend (Node.js API + WebSocket)
- /my-docs (Docusaurus documentation)

Install dependencies for each:

```bash
cd backend
npm install

cd ../mobile
npm install

cd ../my-docs
npm install
```

## 3. Environment Variables

Each service requires environment configuration.

### Backend (`backend/.env`)

```
MONGO_URI=YOUR_MONGO_URI
REDIS_URL=YOUR_REDIS_URL
JWT_SECRET=YOUR_JWT_SECRET
FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL=YOUR_FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY=YOUR_FIREBASE_PRIVATE_KEY
S3_BUCKET=YOUR_S3_BUCKET
S3_REGION=YOUR_S3_REGION
S3_ACCESS_KEY=YOUR_S3_ACCESS_KEY
S3_SECRET_KEY=YOUR_S3_SECRET_KEY
```

### Mobile App (`mobile/.env`)

```
EXPO_PUBLIC_BACKEND_URL=https://your-backend-url
EXPO_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
```

Update values according to your setup.

## 4. Running the Backend

```bash
cd backend
npm run dev
```

Backend will start on the port defined in the config (usually 3001 or similar).

## 5. Running the Mobile App

```bash
cd mobile
npx expo start
```

Scan the QR code with Expo Go or run:

```bash
npm run android
npm run ios
```

## 6. Running Docusaurus

```bash
cd my-docs
npm run start
```

Docusaurus will be available at:

```
http://localhost:3000/
```

Changes reload automatically.

## 7. Building Docusaurus for Production

```bash
cd my-docs
npm run build
npm run serve
```

This generates the static documentation site that you can deploy to any hosting provider.

## 8. Directory Structure Overview

```
flemingo/
 ├── backend/         # Node.js REST + WebSocket API
 ├── mobile/          # React Native app
 ├── my-docs/         # Docusaurus documentation site
 ├── .gitignore
 ├── README.md
 └── package.json
```

## 9. Contribution Process

- Fork the repository
- Create a new feature branch
- Commit changes with meaningful messages
- Open a Pull Request

Follow the architecture and coding standards documented in this repo.

If the setup fails at any point, open an issue in GitHub.
