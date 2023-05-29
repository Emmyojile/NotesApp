# Note App

The Note App is a web application that allows users to take notes and store them in a MongoDB database. It utilizes Node.js, Express.js, EJS templating engine, MongoDB, and Google OAuth for authentication.

## Features

- User Registration and Authentication: Users can register and log in to the Note App using their Google accounts through Google OAuth.

- Create and Manage Notes: Authenticated users can create, view, update, and delete their notes. Notes are stored in a MongoDB database and can be accessed from the user's dashboard.

- User Dashboard: The dashboard provides an overview of the user's notes. Users can view and interact with their notes from this interface.

## Tech Stack

The Note App is built using the following technologies:

- Node.js: A JavaScript runtime environment used for server-side development.
- Express.js: A web application framework for Node.js that simplifies the creation of robust APIs and web applications.
- EJS (Embedded JavaScript): A templating engine for generating dynamic HTML pages.
- MongoDB: A NoSQL document database for storing and retrieving data.
- Google OAuth: A secure authentication mechanism that allows users to log in to the application using their Google accounts.

## Installation

To run the Note App locally, follow these steps:


1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/note-app.git
   

2. Install the dependencies:

   ```shell
   cd note-app
   npm install
   
   
3. Configure environment variables:

   ```shell
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/note-app
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback


4. Start the application:

   ```shell
   npm start
   
   

## Contributing

Contributions are welcome! If you'd like to contribute to the Note App, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.

## License

The Note App is open source and available under the MIT License.
- Feel free to modify the content according to your specific project details and preferences.

