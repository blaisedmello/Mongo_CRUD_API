
# MongoDB and Express CRUD API

This project is a demonstration of how to use Express JS and MongoDB for CRUD API development and Database storage and management. Additionally there are also routes and controllers used for better and more modular code which might be necessary if a project has a lot of API endpoints and they can be grouped together.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` - It takes your MongoDB connection URL

`ANOTHER_API_KEY` - It takes the port that you want to host the server on. If not specified it defaults to 3000


## Dependencies

Install the following dependencies with npm
devDependencies are specific to a project you just add a `-D` tag after you usually `npm i` commmand.
e.g. - `npm i mongodb -D`

```bash
  "dependencies": {
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.8.4"
  },
  "devDependencies": {
    "mongodb": "^6.11.0",
    "nodemon": "^3.1.7"
```
    