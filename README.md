
# To-Do List Project (TypeScript)

A simple command-line To-Do List application built with TypeScript. The project demonstrates core programming concepts such as classes, interfaces, and user interaction through the terminal.

---

## Features

- **Add Tasks**: Create tasks with descriptions and priorities (High, Medium, Low).
- **List Tasks**: View all tasks, including their ID, priority, and status (completed or not).
- **Complete Tasks**: Mark tasks as completed.
- **Remove Tasks**: Delete tasks from the list.
- **Interactive Menu**: User-friendly terminal interface using Node.js.

---

## Prerequisites

Ensure you have the following installed:

1. **Node.js** (v14 or later)
2. **npm** (comes with Node.js)
3. **TypeScript** (install via npm if not already installed)

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo-name/todo-list-typescript.git
cd todo-list-typescript
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile TypeScript Code

```bash
npx tsc
```

### 4. Run the Application

```bash
node dist/index.js
```

---

## Usage

Once the application starts, you'll see an interactive menu like this:

```
--- To-Do List ---
1. Add a task
2. List all tasks
3. Complete a task
4. Remove a task
5. Exit
Choose an option:
```

### 1. Add a Task
- Choose option `1`.
- Enter a description for the task.
- Specify the priority (`High`, `Medium`, or `Low`).

### 2. List All Tasks
- Choose option `2` to display all tasks with their ID, description, priority, and status.

### 3. Complete a Task
- Choose option `3`.
- Enter the ID of the task you want to mark as completed.

### 4. Remove a Task
- Choose option `4`.
- Enter the ID of the task you want to remove.

### 5. Exit
- Choose option `5` to quit the application.

---

## File Structure

```
/src
  |-- index.ts       # Main entry point of the application
  |-- task.ts        # Task interface and priority types
  |-- todoList.ts    # Core logic for managing the to-do list
/tsconfig.json       # TypeScript configuration
```

---

## Example Output

### Adding and Listing Tasks
```plaintext
--- To-Do List ---
1. Add a task
2. List all tasks
3. Complete a task
4. Remove a task
5. Exit
Choose an option: 1
Enter task description: Learn TypeScript
Enter priority (High, Medium, Low): High
Task added successfully!

--- To-Do List ---
1. Add a task
2. List all tasks
3. Complete a task
4. Remove a task
5. Exit
Choose an option: 2

--- All Tasks ---
1: Learn TypeScript [High] [❌]
```

### Completing a Task
```plaintext
Choose an option: 3
Enter task ID to complete: 1
Task marked as completed!

--- All Tasks ---
1: Learn TypeScript [High] [✔]
```

---

## Technologies Used

- **Node.js**: Runtime for executing JavaScript/TypeScript code.
- **TypeScript**: Strongly-typed programming language.
- **readline**: Built-in Node.js module for terminal interaction.

---

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request. Contributions, suggestions, and feedback are welcome!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
