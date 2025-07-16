# Simple Note App

A clean, simple, and modern note-taking web application built with vanilla HTML, CSS, and JavaScript. All notes are saved directly in your browser's local storage.

### [➡️ Live Demo ⬅️](https://glebgoodkovsky.github.io/simple_note_app/)

---

## ⚠️ Important User Information

Please read the following notes before using the application.

### Data Security Warning

This application stores notes directly in your browser's `localStorage`. The data is **not encrypted**. For your own security, please do not store sensitive information such as passwords, personal identification numbers, or private keys.

### Forcing Updates (Hard Refresh)

Because this project is actively being updated, your browser might sometimes load an old, cached version of the code. This can cause bugs. A **hard refresh** forces your browser to download the latest version.

-   **Windows/Linux:** Press `Ctrl + Shift + R`
-   **Mac:** Press `Command + Shift + R`

### If the App Breaks (Clearing Data)

Major updates might change how notes are saved. If this happens, the app may fail to load your old notes and appear broken. To fix this, you must clear the app's old data.

**To fix this, you must clear the app's old data:**

1.  While on the note app page, open your browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
2.  Find the **Application** tab (in Chrome) or **Storage** tab (in Firefox).
3.  On the left-hand side, look for **Local Storage**. Expand it.
4.  You will see an entry for the website (`https://glebgoodkovsky.github.io`).
5.  Right-click on that entry and select **Clear** or **Delete All**.
6.  Refresh the page. The app will now be reset to its latest version.

**Note:** This action will permanently delete all your saved notes. This is only necessary for major, breaking updates.

---

## ✨ Features

-   **Clean & Modern UI:** Simple interface with rounded corners and subtle shadows.
-   **Dark/Light Mode:** Toggle between themes with a click. Your preference is saved.
-   **Full CRUD Functionality:** Create, Read, Update, and Delete notes.
-   **In-Place Editing:** Click on any note to edit its text directly.
-   **Flexible Sorting:** Sort notes by creation date (newest/oldest) or alphabetically (A-Z/Z-A).
-   **Persistent Storage:** Notes are automatically saved in the browser's `localStorage`.
-   **Fully Responsive:** Works beautifully on desktop and mobile devices.

---

## 🛠️ How It Works (Tech Stack)

The app is built with fundamental web technologies, with no external frameworks or libraries.

-   **HTML:** Structures the content of the application.
-   **CSS:** Handles all styling, including the layout, dark/light themes, and responsive design using Flexbox and Media Queries.
-   **JavaScript (Vanilla JS):** Powers all the interactive logic:
    -   **DOM Manipulation:** Dynamically creates, modifies, and deletes note elements.
    -   **Event Listeners:** Handles all user interactions like clicks, keyboard input, and focus changes.
    -   **`localStorage` API:** Persists notes and the selected theme by saving them in the user's browser.

---

## 🚀 How to Use

1.  **Open the [Live Demo](https://glebgoodkovsky.github.io/simple_note_app/).**
2.  **Change Theme:** Click the ☀️/🌙 icon in the top right.
3.  **Add a Note:** Type in the input field and click "Add".
4.  **Edit a Note:** Click on the note text, make your changes, and click outside or press `Enter` to save.
5.  **Delete a Note:** Hover over a note and click the 🗑️ icon.
6.  **Sort Notes:** Choose a method from the dropdown and click "Sort".

---

## 💻 Running Locally

To run this project on your own machine:

1.  Clone this repository:
    ```bash
    git clone https://github.com/GlebGoodkovsky/simple_note_app.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd simple_note_app
    ```
3.  Open the `index.html` file in your web browser. That's it!

---

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue to discuss a new feature or submit a pull request.

---

## A Note on the Learning Process

This project was created as a hands-on exercise to develop my programming skills. It started as a console-only script and has evolved into an interactive web application.

I want to be transparent about the process: I used an AI assistant as a tool to help write and, more importantly, *explain* the code. My goal was to learn how to code *with* AI, using it as a learning partner to grasp fundamentals step-by-step. This project is a result of that learning journey.

---