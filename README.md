---

# To-Do List Application

## Description

This is a simple To-Do List application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to add, update, delete, and mark tasks as complete. The application features a clean UI with a responsive design, and it uses a backend API to manage tasks.

## Features

- **Add Tasks**: Create new tasks and add them to the list.
- **Update Tasks**: Modify task details and mark them as complete.
- **Delete Tasks**: Remove individual tasks or delete all tasks at once.
- **Task Completion**: Mark tasks as complete with a checkbox, which will strike through completed tasks.
- **Notification System**: Popup messages for task actions (added, updated, deleted) with color-coded notifications.

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Environment Management**: dotenv
- **Styling**: CSS

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/ravanraj0312/ToDo.git
cd ToDo
```

### Setup Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following content:

   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=3000
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

### Setup Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL provided by the development server).

## Usage

1. **Add Tasks**: Enter a task name in the input field and click "Add Task" to add it to the list.
2. **Update Tasks**: Click the checkbox next to a task to mark it as complete. Update task names by clicking on them.
3. **Delete Tasks**: Click the "Delete" button next to a task to remove it. Use the "Delete All" button to clear all tasks from the list.
4. **Notifications**: Notifications will appear at the top of the page indicating the status of task actions (added, updated, deleted).

## Project Structure

```
To-Do/
│
├── client/          # React frontend
│   ├── src/          # Source files
│   ├── public/       # Public assets
│   ├── package.json  # Frontend dependencies and scripts
│   └── .env          # Frontend environment variables
│
├── server/          # Node.js backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── package.json # Backend dependencies and scripts
│   └── server.js    # Main server file
│
├── .gitignore       # Git ignore file
├── README.md        # This file
└── package.json     # Root project dependencies and scripts
```



## Contact

For any questions or inquiries, please contact [Raj Gohel](mailto:rajgohel2016@gmail.com).
