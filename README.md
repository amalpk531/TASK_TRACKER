# Task Tracker - MERN Stack Application
A simple app to manage daily tasks.


## 🚀 Features

- ✅ Add, view, update, and delete tasks
- 🔄 Filter tasks by status (pending, in-progress, completed)
- 📱 Responsive design with modern UI
- ⚡ Real-time status updates
- 🎨 Beautiful interface with Tailwind CSS
- 🔍 Task search and filtering
- 📊 Task count statistics



## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React.js** - Frontend framework
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework




## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
```

### 2. Backend Setup

PORT=5000
MONGODB_URI=mongodb://localhost:27017/tasktracker
NODE_ENV=development



#3. Start the Application

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm run dev
```
Server will run on http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```
Frontend will run on http://localhost:3000




## 📂 Project Structure

```
task-tracker/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   ├── TaskItem.js
│   │   │   ├── TaskForm.js
│   │   │   └── FilterTabs.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └──  package.json
│ 
├── server/                 # Express backend
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── app.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🗄️ Database Schema

### Task Model
```javascript
{
  title: String (required, max: 100 chars)
  description: String (optional, max: 500 chars)
  status: String (enum: ['pending', 'in-progress', 'completed'])
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-updated)
}
```


#📝 Usage

1. **Add Task**: Click "Add New Task" button and fill out the form
2. **View Tasks**: Tasks are displayed in cards with status indicators
3. **Filter Tasks**: Use the filter tabs to view tasks by status
4. **Edit Task**: Click "Edit" button on any task card
5. **Delete Task**: Click "Delete" button (with confirmation)
6. **Quick Status Change**: Use the status buttons at the bottom of each task

![image](https://github.com/user-attachments/assets/57e074d4-1de8-49b2-8e47-4a248751e06e)

