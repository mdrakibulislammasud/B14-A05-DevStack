# 🧱 Dev Stack Builder

A responsive React website for exploring modern development technologies and building a personalized technology stack. Technology information is loaded from a JSON file, while React state manages the selected stack and interactive UI.

## 🔗 Project Links

- **GitHub Repository:** Add your repository URL here after publishing.
- **Live Site:** Add your deployed URL here after deployment.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- React Hooks (`useState`, `useEffect`)
- React-Toastify
- JSON

## ✨ Features

1. **Technology Explorer** — 12 technology cards are loaded dynamically from `public/data.json` and displayed in a responsive grid.
2. **Personal Stack Builder** — Add technologies to your stack, prevent duplicates, remove individual items, or clear the entire stack.
3. **Responsive & Interactive UI** — Sticky navigation, mobile hamburger menu, loading state, shared orange-to-pink-to-violet gradient, and toast notifications.

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a JavaScript syntax that lets us write HTML-like UI inside JavaScript. React uses it because it makes component structure easy to read and maintain.

### 2. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data managed by a component that can change and update the UI.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` stores values that can change during the app's lifetime. I used it for technology data, the selected stack, loading status, and the mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after a component renders. I used it when the app starts to fetch `public/data.json` and load the technology list.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify each list item and update only the items that changed efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. I used `stack.length === 0` to show the empty stack message when no technology is selected; otherwise the selected items are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data or functions to a child through props. The child can call a function received through props to send an action or value back to the parent. In this project, `App` passes stack data and handler functions to `TechnologyCard` and `StackPanel`.

## ▶️ Run Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
