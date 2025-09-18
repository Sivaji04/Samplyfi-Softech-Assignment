# SimplyFi ReactJS Frontend Developer - Assignment 1

## Overview

This project is the **Assignment 1 submission** for the ReactJS Frontend Developer position at SimplyFi.
It demonstrates core React skills by fetching and displaying **10 user profiles** in a clean, responsive UI.

Each profile includes a unique avatar, personal details, company information, and contact links.

---

## 🚀 Features

* **Fetches user data** from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
* **Dynamic avatars** using DiceBear Avatars API based on username
* Displays user details:

  * Name & Username
  * Email (clickable mailto link)
  * Phone
  * Website (clickable link)
  * Company Name
  * Address
* **Loading indicator** while fetching API data (improves user experience)
* Clean and **responsive UI** using Bootstrap

---

## 💻 Technologies & Tools

* **ReactJS**: Functional components, hooks (`useState`, `useEffect`)
* **Bootstrap 4**: Responsive layout and UI styling
* **Fetch API**: Retrieve data from external APIs
* **DiceBear Avatars**: Generate unique avatars for each user
* **Vercel**: For live deployment

---

## 📁 Project Structure

```
assignment1-basic/
│
├─ public/          # Static files
├─ src/             # React source code
│   ├─ App.js       # Main application component
│   ├─ UserCard.js  # Reusable user card component
│   └─ index.js     # React entry point
├─ package.json     # Dependencies and scripts
└─ README.md        # This file
```

---

## 🔧 Getting Started

### Prerequisites

* Node.js and npm installed

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

* Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

---

## 🌐 Live Demo

Check the live deployment here: [User Profile Assignment 1](https://user-profile-basic-sivaji.vercel.app/)

---

## 📈 Key Learnings & Takeaways

* Building a React app from scratch using **Create React App**
* Managing **state and lifecycle** using hooks
* Conditional rendering (loading spinner vs user data)
* Reusable **component creation** (`UserCard`)
* Integrating external APIs for dynamic data and avatars

---

## 👨‍💻 Author

**Sivaji Sudula**
ReactJS Frontend Developer

* GitHub: [https://github.com/Sivaji04](https://github.com/Sivaji04>)
* Email: [sudula444@gmail.com](sudula444@gmail.com)
