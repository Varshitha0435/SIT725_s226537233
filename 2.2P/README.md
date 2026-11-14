
# SIT725 - Task 2.2P
## Node.js and Express Addition Calculator

### About the Project
For this task, I created a simple addition calculator using Node.js and Express. The application has a webpage where users can enter two numbers and get their sum.

The addition is performed on the server using a GET API. The webpage sends the numbers to the server and displays the returned result.

### Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- JavaScript

### How to Run the Application

1. Clone the GitHub repository.
2. Open the 2.2P folder in a terminal.
3. Install the dependencies:

    npm install

4. Start the server:

    npm start

5. Open http://localhost:3000 in a browser.

### GET API

Endpoint:

    GET /add?a=10&b=20

Example URL:

    http://localhost:3000/add?a=10&b=20

Expected response:

    {
      "firstNumber": 10,
      "secondNumber": 20,
      "result": 30
    }

### Testing
I tested the application with positive numbers, negative numbers and decimal numbers.

I also checked what happens when invalid values are entered. The server returns an error message instead of calculating an incorrect result.

### Project Files
- server.js - Express server and addition API
- public/index.html - Calculator webpage
- package.json - Project information and dependencies
- screenshots/ - Screenshots of practical activities
