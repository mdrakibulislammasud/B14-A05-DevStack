# 🧱 Dev Stack Builder

A responsive React website for exploring modern development technologies and building a personalized technology stack. Technology information is loaded dynamically from a JSON file, while React state manages the selected stack and interactive UI.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/mdrakibulislammasud/B14-A05-DevStack
- **Live Site:** https://b14-a05-dev-stack-psi.vercel.app/

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* CSS3
* React Hooks (`useState`, `useEffect`)
* React-Toastify
* JSON

## ✨ Features

1. **Technology Explorer** — 12 technology cards are loaded dynamically from `public/data.json` and displayed in a responsive grid.

2. **Personal Stack Builder** — Add technologies to your stack, prevent duplicate selections, remove individual items, or clear the entire stack.

3. **Responsive & Interactive UI** — Includes a sticky navigation bar, mobile hamburger menu, loading state, gradient-based design, and toast notifications.

4. **Responsive Design** — The website adapts to desktop, tablet, and mobile screen sizes.

5. **Interactive Stack Counter** — Displays the number of technologies currently selected in the personal stack.

## ▶️ Run Locally

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/mdrakibulislammasud/B14-A05-DevStack.git
```

### 2. Open the project folder

```bash
cd B14-A05-DevStack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

### 5. Create a production build

```bash
npm run build
```

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax that allows us to write HTML-like UI elements inside JavaScript. React uses JSX because it makes component structure easier to read, write, and maintain.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data that can change during the application's lifetime. In this project, it is used for technology data, the selected stack, loading status, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects after a component renders. In this project, it is used when the application starts to fetch `public/data.json` and load the technology list.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify individual list items. This allows React to efficiently determine which items have changed, been added, or removed when updating the UI.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition. In this project, `stack.length === 0` is used to show an empty-stack message when no technology is selected. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data or functions to a child component through props. The child can then call a function received through props to send an action or value back to the parent. In this project, `App` passes stack data and handler functions to `TechnologyCard` and `StackPanel`.

## 📁 Project Structure

```text
B14-A05-DevStack/
├── assets/
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── data.json
│   ├── index.css
│   └── main.jsx
├── ui/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 📌 Project Highlights

* Built with React and Vite.
* Uses React Hooks for state and side-effect management.
* Loads technology information dynamically from JSON.
* Provides an interactive personal technology stack builder.
* Includes responsive navigation for mobile devices.
* Uses React-Toastify for user feedback.
* Designed for desktop, tablet, and mobile screens.
