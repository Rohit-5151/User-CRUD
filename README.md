React User Management CRUD App

This is a simple React-based CRUD (Create, Read, Update, Delete) application for managing user data.
The app is designed with future extensibility in mind, allowing new fields to be added with minimal code changes.

1. Setup Instructions
    npm install

2. Start React App
    npm start

3. The app will be available at:
    http://localhost:3000

4. Production Build
    npm run build

Data Persistence (LocalStorage)
    All user data is stored in browser LocalStorage
    Data persists across page refreshes
    Data is browser-specific and will be cleared if LocalStorage is manually cleared

Add a new field configuration:
{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}

Design Decisions & Assumptions
  Schema-based form rendering was chosen to support easy extensibility.
    LocalStorage is used instead of a backend API to:
    Avoid deployment issues
    Enable frontend-only hosting (Netlify, Vercel, GitHub Pages)
    Simplify demo and assignment evaluation
    CRUD logic is abstracted via a service layer to allow future backend integration with minimal changes.
    Basic client-side validation is handled centrally in the form component.
    Bootstrap is used for clean, responsive UI with minimal setup.

Technologies Used
  React (Hooks)
  Browser LocalStorage
  Bootstrap
