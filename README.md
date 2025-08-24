
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a simple to-do list app that lets users create and delete tasks.

## Set up

### Front end
Navigate to frontend directory and run `npm start`.
This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Back end
Navigate to backend directory and run `node server.js`. This runs the server locally on port [http://localhost:3001](http://localhost:3001).

### Database
This app uses mongodb for data storage. You must either set up a Mongodb Atlas cluster for storing data or run a Mongodb community edition server locally.

For Mongodb Atlas go to https://www.mongodb.com/cloud/atlas/register and create a cluster, you can choose the free tier. Then on your cluster item hit Connect -> Drivers and choose Mongoose.
Copy your connection string, then create an .env file in the top project directory and set the MONGO_URI=\<your connection string\>. Don't forget to add your IP address in the Network Access under the Security section
found on the left tab of your Atlas console, otherwise you won't be able to connect to your database.

If you choose Mongodb Community go to https://www.mongodb.com/products/self-managed/community-edition and download the latest version. After setting up and running the server create a .env file in the base project directory and 
set MONGO_URI = \<your mongodb connection url\>.

If you've set up the Mongodb connection successfully you'll see '✅ Connected to MongoDB with Mongoose!' message when starting the backend server.