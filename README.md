# Exercise Tracker

 This is a Node.js Express application that allows users to create exercise sessions, log their workouts, and retrieve exercise logs. It is built with MongoDB as the database to store user data and exercise sessions.


## Getting Started

### Prerequisites

To run this application, you'll need:

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running.

## Configuration
Before running the application, you need to set up environment variables. Create a `.env` file in the project root and configure the following variables:

```env
PORT=3000                 # Port on which the server will run
MONGODB_URI=mongodb://localhost/exercise_log   # MongoDB connection URI
```

## Usage

### Endpoints

The API provides the following endpoints:

- **Create a new user**: You can create a new user by making a POST request to `/api/users`.

- **Retrieve a list of all users**: You can retrieve a list of all users by making a GET request to `/api/users`.

- **Add an exercise session for a user**: To add an exercise session for a user, make a POST request to `/api/users/:_id/exercises`. Replace `:id` with the user's ID.

- **Retrieve exercise logs for a user**: To retrieve exercise logs for a user, make a GET request to `/api/users/:_id/logs`. You can optionally include query parameters to filter the results, such as `from`, `to`, and `limit`.

### Example Requests

- **Creating a new user**:

  ```http
  POST /api/users
  Content-Type: application/x-www-form-urlencoded

  username=JohnDoe
  
- **Adding an exercise session**:
  ```http
  POST /api/users/:_id/exercises
  Content-Type: application/x-www-form-urlencoded
  
  description=Running
  duration=30
  date=2023-09-07

- **Retrieving exercise logs for a user with filters:**:
  ```http
  GET /api/users/:_id/logs?from=2023-09-01&to=2023-09-10&limit=5

## Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
