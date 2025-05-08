# React Native Launchkit

<p align="center">
  <img src="https://github.com/user-attachments/assets/706a6fa8-9b05-4783-9bf5-de5248b862a4" alt="React Native Launchkit Presentation" width="480">
</p>

**A Clear Canvas for Rapid React Native Exploration, Inspired by Bulletproof React**

`React Native Launchkit` is a streamlined starter project built to help you dive into React Native development quickly and confidently. Inspired by the [Bulletproof React project structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md), it comes pre-configured with popular tools and integrations—including full Expo + Firebase setup and essential authentication screens (sign in, sign up, sign out). With a clean, scalable foundation, you can focus on building, experimenting, and shipping faster.

## ✨ Key Features

- **Instant Setup with Expo:** Get up and running quickly with Expo's developer tools and services.
- **Firebase Integration:** Leverage the power of Firebase for backend needs like authentication and data storage.
- **NativeWind Styling:** Enjoy the utility-first approach to styling with NativeWind (Tailwind CSS for React Native).w
- **Redux for State Management:** Implement robust and predictable state management with Redux.
- **Dark Mode Support:** Provides light/dark modes.
- **Essential Screens Included:**
  - **Login:** A ready-to-use login screen.
  - **Register:** A registration screen for new users.
  - **Home (Playground):** The central screen where you can start building and testing your React Native ideas.
  - **Settings:** A basic settings screen for customization.
- **Clear Canvas Approach:** Provides a minimal yet functional starting point, allowing you to easily add and customize features within a structured environment.
- **Adheres to Bulletproof React Structure:** Adopts a scalable and maintainable project organization for long-term growth.

## 🚀 Getting Started

1.  **Clone the repository:**

```bash
git clone https://github.com/robert-sinko/react-native-launchkit
cd react-native-launchkit
```

2.  **Install dependencies:**

```bash
npm install
# or
yarn install
```

3.  **Set up firebase**

- Create a new Firebase project.
- Copy the example environment file:

```bash
cp .env.local.example .env.local
```

- Fill in the necessary Firebase credentials in .env.local.

4.  **Start the Expo development server:**

```bash
npx expo start
# or
yarn start
```

This will open the Expo Go app on your simulator/emulator or physical device (if you have it set up).

## 🛠️ Included Integrations

- **Expo:** Simplifies React Native development with tools for building, deploying, and updating your app.
- **Firebase:** A comprehensive platform for mobile and web development, offering services like authentication, database, storage, and more.
- **NativeWind:** Brings the utility-first CSS framework Tailwind CSS to React Native for rapid styling.
- **Redux:** A predictable state container for JavaScript apps, helping you manage complex application state.

## 📂 Project Structure (Based on Bulletproof React)

```
src
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- routes        # application routes / can also be pages
|   +-- app.tsx       # main application component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
|   +-- router.tsx    # application router configuration
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- testing           # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

## 📝 TODO List

- [x] Create new repo
- [x] Update readme
- [x] Install NativeWind
- [x] Create auth feature, add dummy screens, implement navigation
- [x] Add home feature
- [x] Implement Dark mode
- [x] Add settings feature
- [x] Implement login/logout
- [x] Implement Register

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, please feel free to open a pull request or submit an issue on GitHub.
