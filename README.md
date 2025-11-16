🚀 How to Install & Run the API

Follow these steps to run the API locally.

1️⃣ Install Dependencies

Run inside your project folder:

npm install


This installs Express.js and any additional required packages.

2️⃣ Start the Server
Development mode (nodemon auto-reload):
npm run dev

Normal mode:
npm start

3️⃣ API Base URL

Once running, visit:

http://localhost:5000


You should see:

{ "message": "CSC 436 Project 4 API is running" }


This confirms that the API server is working.

🔌 API Endpoints

Below is a full list of every implemented endpoint.

Each returns a JSON response and proper HTTP status codes.

✔️ GET – Retrieve All Tasks
GET /api/tasks


Description: Returns a list of all existing tasks.

✔️ GET – Retrieve a Task by ID
GET /api/tasks/:id


Returns:

200 OK (task found)

404 Not Found (invalid ID)

✔️ POST – Create a New Task
POST /api/tasks

JSON Body Example
{
  "title": "Study for exam",
  "completed": false
}


Returns:

201 Created

Newly created task with unique ID

✔️ PUT – Update a Task by ID
PUT /api/tasks/:id

JSON Body Example
{
  "title": "Study for exam",
  "completed": true
}


Returns:

200 OK

Updated task

404 Not Found if ID does not exist

✔️ DELETE – Remove a Task by ID
DELETE /api/tasks/:id


Returns:

200 OK with deleted task data

404 Not Found if ID does not exist
