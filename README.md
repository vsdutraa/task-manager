# Windows Task Manager - Inspired Task Manager

A simple task manager inspired by the layout of the Windows Task Manager, where you can add and delete your daily tasks.

## Features

- Add your daily tasks.
- Delete tasks when completed.
- Familiar user interface inspired by the Windows Task Manager.

## Technologies Used

- React for the development of the user interface.
- CSS for styling.
- JSON Server to simulate an API for storing and retrieving tasks (can be replaced by a real backend in a production environment).

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/vsdutraa/task-manager.git
   cd task-manager
   ```

2. Install dependencies:

	```bash
	npm install
	```
	
3. Start the API server (JSON Server):

	```bash
	npx json-server --watch .\data\db.json --port 8000
	```
	
4. Start the React application:

	```bash
	npm run start
	```
	
5. Open your browser and go to `http://localhost:3000`.

