# ChatBox Widget

## Overview
The ChatBox widget is a customizable chat box designed for integration into web applications. It provides a simple way to add chat functionality with customizable appearance.

## Installation
Simply include the `ChatBox` class in your project.

## Usage
1. Create an instance of the `ChatBox` class, providing necessary parameters.
2. Initialize the chat box using the `init()` method.

## Tip
Use the .help() method to display a help message in the chat box.

### Example
```javascript
// Import ChatBox class if using ES6 modules
// import ChatBox from './ChatBox';

// Create a new instance of ChatBox
const chatBox = new ChatBox(
    "Support Chat",
    300,
    400,
    "https://example.com/chat",
    "Need help? Chat with us!",
    "#ffffff",
    "#000000",
    "https://example.com/chat-icon.png",
    "Arial"
    // The font property is optional and defaults to '' empty string
);

// Initialize the chat box
chatBox.init();
