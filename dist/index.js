"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = require("./todoList");
const readline = require("readline");
const toDoList = new todoList_1.ToDoList();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Exibe as opções do menu
function showMenu() {
    console.log("\n--- To-Do List ---");
    console.log("1. Add a task");
    console.log("2. List all tasks");
    console.log("3. Complete a task");
    console.log("4. Remove a task");
    console.log("5. Exit");
    rl.question("Choose an option: ", handleMenu);
}
// Lida com a entrada do menu
function handleMenu(option) {
    switch (option.trim()) {
        case "1":
            rl.question("Enter task description: ", (description) => {
                rl.question("Enter priority (High, Medium, Low): ", (priority) => {
                    toDoList.addTask(description, priority);
                    console.log("Task added successfully!");
                    showMenu();
                });
            });
            break;
        case "2":
            console.log("\n--- All Tasks ---");
            toDoList.listTasks();
            showMenu();
            break;
        case "3":
            rl.question("Enter task ID to complete: ", (id) => {
                if (toDoList.completeTask(Number(id))) {
                    console.log("Task marked as completed!");
                }
                else {
                    console.log("Task not found!");
                }
                showMenu();
            });
            break;
        case "4":
            rl.question("Enter task ID to remove: ", (id) => {
                if (toDoList.removeTask(Number(id))) {
                    console.log("Task removed successfully!");
                }
                else {
                    console.log("Task not found!");
                }
                showMenu();
            });
            break;
        case "5":
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid option, please try again.");
            showMenu();
            break;
    }
}
// Inicializa o programa
showMenu();
