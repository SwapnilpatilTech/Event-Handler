# ⚛️ React Event Handler App

This is a simple React project that demonstrates how to handle **user-driven events** such as button clicks, data fetching, and navigation using **React Hooks**, `axios`, and dynamic component rendering.

---

## 📌 Project Objective

This app helps users understand and interact with UI elements by:
- Fetching data (e.g. posts) via an API
- Navigating using **left/right buttons**
- Updating state dynamically with `useState` and `useEffect`
- Rendering each item or post in a child component

---

## 🧠 Key Concepts Covered

- Event Handling in React
- State Management with `useState`
- Side Effects with `useEffect`
- API calls using `axios`
- Reusable components
- Conditional rendering

---

## 🗂 Folder Structure

eventhandler/
├── public/
│ └── index.html
├── src/
│ ├── App.jsx # Main entry component
│ ├── Handler.jsx # Contains navigation, event handling logic
│ ├── Post.jsx # Displays individual post data
│ ├── index.css # Tailwind or custom styling
│ └── main.jsx # ReactDOM render
├── tailwind.config.js # Tailwind setup (optional)
├── vite.config.js # Vite bundler setup
├── package.json
└── README.md

⚙️ Project Functionality
Fetches post data using axios inside useEffect

Displays a post in the Post component

Navigates between posts using:

FaChevronLeft ← Previous

FaChevronRight → Next

State updates using:

useState to hold current index

Buttons to increment/decrement the index

Prevents going out of bounds (e.g., can’t go left at index 0)
