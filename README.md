# Simple Note App
---
This is a interesting project I'm making in order to experiment, learn, and develop my programing skills

---
## Features
- at the time of writing all of this is written in Javascript alone
- You can add a new note to a list.
- You can view all the notes you have added.

over time, im planning to slowy add more features

---
## How It Works
The code teaches the browser console two simple skills: 
- how to add a note
- how to show all the notes.

```javascript
let notes = [];

function addNote(text_of_my_note) {
  notes.push(text_of_my_note);
}

function listNotes() {
  notes.forEach(function(one_note) {
    console.log(one_note);
  });
}
```

---
### Code Explained
---
#### Part 1: The empty page where we will write our notes

```javascript
let notes = [];
```

Think of this as getting a new, blank page of paper.

- `let notes` means: "Let's name this page **notes**."
- `= []` means: "Right now, the page is empty." The `[]` symbols are like an empty list.

---
#### Part 2: How to ADD a new note to the page

```javascript
function addNote(text_of_my_note) {
  notes.push(text_of_my_note);
}
```

- `function addNote(...)`: This is us teaching the computer a new skill. The skill is called **addNote**.
- `(text_of_my_note)`: To use this skill, we must give it the text we want to write down.
- `notes.push(...)`: This is the action. push just means "add to the end of our list."
- So, the line `notes.push(text_of_my_note)`; means: "Take the text we gave you and write it on our `notes` page."

---
#### Part 3: How to READ every note on the page

```javascript
function listNotes() {
  notes.forEach(function(one_note) {
    console.log(one_note);
  });
}
```

- `function listNotes()`: This is another new skill we are teaching the computer. This one is called **listNotes**.
- `notes.forEach(...)`: This is the most important part. It means: "Go to our notes page and look at the notes **one by one**."
- `function(one_note)`: As we look at each note, we will call it one_note for a moment.
- `console.log(one_note)`: This command just means "show me this on the screen."

So, the **listNotes** skill tells the computer to go down our list and read every single note out loud for us to see.

---
## How to Test it

You can test this right in your browser.

1. **Copy the Code**: Select and copy the main JavaScript code block from the "How It Works" section.
2. **Open the Developer Console**: In your browser, press the `F12` key and click the `"Console"` tab.
3. **Paste the Code**: Paste the code into the console and press `Enter`.
4. **Use the Commands**: Now you can use the commands. Type these into the console and press Enter.

- To add a note:
```javascript
addNote("example message 1");
```

- To add another note:
```javascript
addNote("example message 2");
```

- To see your list
```javascript
listNotes();
```

- After typing `listNotes();` you should see something like

`example message 1`
`example message 2`

---
## A Note on the Learning Process

I want to be transparent about how this project was created. While the JavaScript code here was written with the help of an AI assistant, my goal is not just to have an AI build an app for me. I am using it as a tool to practice and genuinely understand the fundamentals.

My process involves asking for small, simple pieces of code and, most importantly, getting clear and simple explanations for what each line does, so I can learn in the process step by step. This project is my way of learning how to code *with* AI, not just getting a final product from it, and its a way to learn how to code in general, since I am new. It's helping me grasp the basics so I can eventually write this kind of code myself, or write with AI, but understand what it.

---

Feel free to let me know suggestions of what I can add/modify to improve this simple code

---