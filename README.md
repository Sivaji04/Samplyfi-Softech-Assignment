# Samplyfi Softech Assignment Reference Document

# ReactJS Frontend Developer Assignments

## 1. Introduction & Core Goal

The main objective is to build a single-page React application that fetches user data from a public API and displays it as a series of profile cards. There are two versions of this assignment to cater to different skill levels.

- **Assignment 1 (Beginner):** Focuses on the fundamental concepts of React.
- **Assignment 2 (Advanced):** Builds upon the first assignment by introducing a new UI library, responsiveness, and more complex state management.

## 2. Prerequisites: What You'll Need

Before you start, make sure you're comfortable with the following:

- **HTML & CSS:** Basic understanding of web structure and styling.
- **JavaScript (ES6+):** Knowledge of modern JavaScript syntax is crucial.
- **ReactJS Fundamentals:** You should know about components, JSX, props, and state.
- **Node.js & npm:** You need `npm` (Node Package Manager) installed to create a React app and manage packages.
- **API Concepts:** A basic understanding of what a REST API is and how to fetch data from it.
- **Git & GitHub:** A GitHub account is required for submitting your code.

## 3. The Core Task (Applies to Both Assignments)

### A. Fetching User Data

Your application will get its data from a free JSON API.

- **Method:** `GET`
- **URL:** `https://jsonplaceholder.typicode.com/users`

This endpoint will return an array of 10 user objects. Here's a look at the structure of a single user object:

```
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  }
}

```

### B. Generating User Avatars

Each user needs a unique avatar. You will use the **DiceBear Avatars API** to generate one based on their `username`.

- **Base URL:** `https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy`

You must dynamically replace `{{username}}` with the actual username from the user data.

- **Example:** For a user with the username `Bret`, the full avatar URL would be:
`https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy`

### C. Displaying a Loading Indicator

While your app is fetching data from the API, it should display a loading spinner or indicator. This provides a better user experience. You can get excellent, easy-to-use CSS spinners from [SpinKit](http://tobiasahlin.com/spinkit/).

## 4. Assignment 1: Building the Foundation

This assignment is about getting the basics right. Your goal is to create an **exact replica** of the demo application for desktop screens.

### Key Skills to Demonstrate:

- Creating a project with `create-react-app`.
- Writing components using JSX.
- Passing data down with `props`.
- Managing component state (`useState`).
- Fetching API data within a component (`useEffect`).
- Rendering content based on conditions (e.g., showing a loader or the user list).
- Using `.map()` to render a list of components.

### Step-by-Step Guide:

1. **Create Your Project:** Open your terminal and run:
    
    ```
    npx create-react-app user-profiles-basic
    
    ```
    
2. **Structure Your App:**
    - Inside the `src` folder, your main component will be `App.js`.
    - Consider creating a new component, `UserCard.js`, to represent a single user's profile.
3. **Fetch Data in `App.js`:**
    - Use the `useState` hook to store the list of users and a loading state.
    - Use the `useEffect` hook to fetch the user data when the component first loads. You can use the browser's built-in `fetch()` function or install a library like `axios`.
4. **Display the User List:**
    - In `App.js`, conditionally render the loading indicator if the data is still being fetched.
    - Once the data arrives, map over the users array. For each `user` in the array, render your `<UserCard />` component, passing the user's data and avatar URL as props.
5. **Build the `UserCard.js` Component:**
    - This component will receive the user's details via `props`.
    - Arrange the data (name, email, phone, etc.) and display the avatar image.
6. **Styling:**
    - The demo uses **Bootstrap**. You can easily add it to your project by putting the following line in your `public/index.html` file, inside the `<head>` tag:
        
        ```
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        
        ```
        
    - Use Bootstrap classes (like `container`, `row`, `col-md-4`, `card`) to structure your layout and style the cards.

## 5. Assignment 2: The Advanced Challenge

This assignment tests your ability to learn new tools and handle more complex interactions. Your goal is to create a **responsive replica** of the demo that works on mobile, tablet, and desktop.

### Key Skills to Demonstrate:

- All skills from Assignment 1.
- Learning and implementing a new UI library (**Ant Design**).
- Creating a responsive layout that adapts to different screen sizes.
- Handling user events (like button clicks).
- Working with forms and modals for editing user data.
- **Lifting State Up:** Managing state in a parent component that is shared and modified by multiple child components.

### Step-by-Step Guide:

1. **Project Setup:** Start a new project or build on top of Assignment 1.
2. **Install Ant Design:** In your project's terminal, run:
    
    ```
    npm install antd
    
    ```
    
    Then, import the Ant Design CSS file into your `src/index.js` or `src/App.js` file:
    
    ```
    import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' for older versions
    ```
    
3. **Create a Responsive Layout:**
    - Use Ant Design's `<Grid>` system (`<Row>` and `<Col>`).
    - Specify different column spans for different screen sizes (e.g., `xs={24}`, `sm={12}`, `md={8}`) to make your layout responsive.
4. **Implement Ant Design Components:**
    - Replace your basic HTML card with Ant Design's `<Card>` component.
    - Use `<Button>` and `<Icon>` components for actions like "like", "edit", and "delete".
    - The "edit" action should open a `<Modal>` component containing a `<Form>` to edit user details.
5. **Handle State and Events:**
    - When the "Edit" button on a user card is clicked, you need to open a modal with that specific user's data.
    - The state for which user is being edited and whether the modal is open should be managed in the parent `App.js` component.
    - When the form in the modal is submitted, the `App.js` component should update the user's data in its state. This is a classic example of "lifting state up."

## 6. Submission and Deployment

Follow these steps carefully to submit your work.

### A. Sharing Your Code

1. **Create a GitHub Repository:** Create a new **public** repository on your GitHub account.
2. **Push Your Code:** Upload your project to this repository. **IMPORTANT:** Make sure you do NOT upload the `node_modules` folder. Your `.gitignore` file (created by `create-react-app`) should handle this automatically.
3. **Share the Link:** Email the link to your public GitHub repository to **careers@simplyfi.tech**.

### B. Deploying Your Application

You must also deploy your live application. A simple way to do this is with **Vercel (formerly Zeit Now)**.

1. **Create an Account:** Sign up for a free account at [Vercel](https://vercel.com/signup).
2. **Install the Vercel CLI:**
    
    ```
    npm install -g vercel
    ```
    
3. **Build Your App:** Run the build command in your project's root directory.
    
    ```
    npm run build
    ```
    
4. **Deploy:** Navigate into the newly created `build` directory and deploy.
    
    ```
    cd build
    vercel --prod
    ```
    
    Follow the on-screen prompts to log in and deploy your project. Vercel will give you a public URL for your live application. Share this URL along with your GitHub link.
