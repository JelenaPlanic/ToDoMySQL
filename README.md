# Task List Project

This project is a simple task list application (Model-View-Controller).

### Project Structure

```markdown
The project consists of three main entities:

1. Category: Represents different categories for tasks.
2. Priority: Defines the priority levels for tasks.
3. Task: Contains the actual tasks with details like description, status, deadline, priorityID, categoryID etc.

## Technologies Used

- [Node.js]   -> The runtime environment for executing JavaScript code on the server side.
- [Express]   -> A minimal and flexible Node.js web application framework used for web applications.
- [MySQL2])   -> A MySQL library for Node.js for database operations.
- [Nodemon]   -> A utility that monitors for changes in your source code and automatically restarts your server.
- [EJS]       -> Embedded JavaScript templates for dynamic content rendering.
- [Bootstrap] -> A popular front-end framework for responsive user interfaces.
- [Dayjs]     -> JavaScript library for date and time manipulation.

### Getting Started

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/index.html) (for the MySQL database)

## Installing

```bash
git clone https://github.com/your-username/task-list.git
cd task-list
npm install
npm run dev

## Setting Up the Database

1. Make sure you have XAMPP installed on your machine.

2. Start XAMPP and ensure that the MySQL server is running.

3. Open your web browser and go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin).

4. Log in to phpMyAdmin using your MySQL username and password.

5. Create a new database named `task_list`.

6. In the project directory, locate the this folder.

7. Find the `task_list.sql` file inside the folder.

8. In phpMyAdmin, navigate to the `Import` tab.

9. Click on the "Choose File" button and select the `task_list.sql` file.

10. Click the "Go" button to import the database schema.








