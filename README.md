# MERNsters-inc

To find and communicate with friends. A scheduling functionality to see and set your schedule. Notifies you of an upcoming event. This application is for over 18s.

## Specifications

## Requirements

## User Stories

```
As a MERNster user
I can signup with ease 
I would like to login and logout. 
```

```
As a MERNster user
I can find friends.
I would like to message all my friends.
```

```
As a MERNster user
I can swipe thru a list of possible new friends.
I would like to see a list of my friends.
```

```
As a MERNster user
I can organise meet-ups.
I can find unique people that I have lots in contact with.
```

```
As a MERNster user
I can find and connect with likeminded people.
I would like to find new friends.
```

```
As a MERNster user
I can find and connect with existing friends and peers.
I would like to find new friends.
```

```
As a MERNster user
I can specify my interest, industries, likes and dislikes.
I would also like to opt out of particular of particular interests etc.
```

```
As a MERNster user
I can group friends together by groups - politics, sports etc
I would like to be matched with likeminded people based on location, interest, networking, faith, sport(form a day)s & education.

```

## Diagram

### Backend Diagram
<img src='images/backend.png'/>

### Frontend Diagram
<img src='images/frontend.png'/>


## Tech Stack

## How to run

Clone this repo:

```
https://github.com/Dmum303/MERNsters-inc.git

```

Run the frontend:

```
cd frontend
npm install
npm run dev
```

# Project setup

1. Fork this repository
2. Clone your fork to your local machine
3. Install Node.js dependencies for both frontend and backend (API)
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

4. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
5. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

# Running the application

1. Start the server
   ```
   ; cd api
   ; xxxxxx npm run devStart
   ```
2. Start the front end

  In a new terminal session...
  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/` which directs you to the hompeage, where you can sign-up or log in.

(Add heroku link here)

## Running mongoDB

```shell
   # Start the mongo terminal/REPL
   mongosh
```

## Mongosh commands

```shell
   # Show all databases
   show dbs

   # Switch to a database
   use <database name>

   # Show all collections in the current database
   show collections

   # Show all documents in a collection
   db.<collection name>.find()

   # Show all documents in a collection, formatted
   db.<collection name>.find().pretty()
```

