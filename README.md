# SMS Sender App
This is a simple React application that allows users to send SMS messages using the SMSLeopard API.

# Features
Send SMS messages to specified destinations.
Customize message content and destination number.
Default source set to "SMS_Leopard" (non-editable).

# Getting Started
To get started with this project, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install or yarn install.
Run the application using npm start or yarn start.
Access the application in your browser at http://localhost:5173.

# Usage
Enter your message content in the "Message" field.
Enter the destination phone number in the "Destination" field.
Click the "Send SMS" button to send the message.
If successful, you will see a success message indicating that the SMS was sent successfully. If there is an error, you will see an error message.

# Configuration
To configure the application to use your SMSLeopard API credentials, update the apiKey and apiSecret variables in the handleSubmit function of the App component with your actual API key and secret.

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';

# Dependencies
This project uses the following dependencies:
React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making AJAX requests.
Tailwind Css

# License
This project is licensed under the MIT License - see the LICENSE file for details.
