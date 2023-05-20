# Real Time Code X

This is a simple online real-time Front-End editor developed with HTML, CSS and Vanilla JavaScript.

JavaScript code is intended to create an interactive web interface that allows the user to write and execute HTML, CSS, and JS code in real time. To do this, the code uses the following elements:

- A navigation bar with three tabs that correspond to each web programming language.
- A main section with three text areas where the user can write the code for each language.
- An iframe where the result of the executed code is displayed.

The JavaScript code performs the following actions:

- Select the elements of the HTML document using the class and attribute selectors.
- Create a style element and add it to the head of the iframe to apply the CSS code.
- Define a function that sets the visibility and position of the sections based on the active tab of the navigation bar.
- Define a function that toggles the data-active attribute of the clicked tab and calls the above function to update the visibility of the sections.
- Defines a function that updates the content of the iframe with the HTML and JS code written by the user.
- Add a click event on each navbar tab to call the corresponding section toggle function.
- Add an input event to each textarea to call the update iframe function.
- Call the update iframe function at the beginning of the code to display the initial result.

The JavaScript code is an example of how to use events, functions, and selectors to create a dynamic and reactive web interface.