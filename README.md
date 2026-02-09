React User Management CRUD App

This is a simple React-based CRUD (Create, Read, Update, Delete) application for managing user data.
The app is designed with future extensibility in mind, allowing new fields to be added with minimal code changes.

1. Setup Instructions
    npm install

2. Start Mock API (JSON Server)
    Ensure db.json exists in the project root.
    json-server --watch db.json --port 5000

3. Start React App
    npm start

4. The app will be available at:
    http://localhost:3000

5. Production Build
    npm run build

Adding New Fields (Extensibility)
The form and table are schema-driven.
To add a new field (e.g. Date of Birth or Address):
src/config/userSchema.js

Add a new field configuration:
{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}

Design Decisions & Assumptions
  Schema-based UI rendering was chosen to ensure easy extensibility.
  JSON Server is used as a mock backend to simulate real REST APIs.
  Axios is isolated in a service layer for clean separation of concerns.
  Basic client-side validation is handled centrally in the form component.
  The app assumes a REST-style API with standard CRUD endpoints.
  Styling uses Bootstrap for simplicity and responsiveness.

Technologies Used
  React (Hooks)
  Axios
  JSON Server
  Bootstrap
