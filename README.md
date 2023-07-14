# Real Time Code X

This is a simple real-time Front-End editor developed with HTML, CSS and Vanilla JavaScript. It allows the user to write and execute HTML, CSS, and JS in real time by providing input code in the corresponding sections and recieving the output in another one.

The app is intended to create a simple and intuitive interface with optimal experience across desktop devices, even with different screen resolutions. For this, the most recent CSS features, along with semantic HTML, and up-to-date JavaScript technologies are used.

The main logic is implemented in JavaScript, which is driven towards Functional Programming and it's centered in clean, readable code with good practices. It's divided in three main sections: *DOM Elements*, *Main* and *Functions*.

The *DOM Elements* section stores the elements that will be manipulated to achieve the editors's visual functionallity and interactivity.

The *Main* section sets the iframe's style tag and the event listeners for the tabs, as well as the listeners for the code sections. It also updates the output for the initial example code provided by calling `updateOutput()`.

The *Functions* section contains all the necessary functions for the app to work. These are:

- `setSectionsVisibility(...navbarTabs)`: Shows or hides sections based on their corresponding active tabs from the navigation bar. These tabs are passed as arguments.

- `toggleSection(event)`: Toggles the `data-active` attribute from the clicked tab and set's it's visibility accordigly by calling the `setSectionsVisibility` function.

- `updateOutput()`: Takes the input from the user and updates the iframe's content to output the corresponding result.

This project is mainly a use example of CSS for responsiveness across devices and JavaScript for interactivity by implementing DOM manipulation and Event Listeners using the latest ECMAScript features such as template strings, arrow functions, spread syntax, etc.