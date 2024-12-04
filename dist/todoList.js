"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
class ToDoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    // Adiciona uma nova tarefa
    addTask(description, priority = "Medium") {
        const task = {
            id: this.nextId++,
            description,
            priority,
            completed: false,
            createdAt: new Date(),
        };
        this.tasks.push(task);
        return task;
    }
    // Lista todas as tarefas (opcionalmente, filtradas)
    listTasks(filter) {
        let filteredTasks = this.tasks;
        if ((filter === null || filter === void 0 ? void 0 : filter.completed) !== undefined) {
            filteredTasks = filteredTasks.filter((task) => task.completed === filter.completed);
        }
        if (filter === null || filter === void 0 ? void 0 : filter.priority) {
            filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
        }
        if (filteredTasks.length === 0) {
            console.log("No tasks found.");
            return;
        }
        filteredTasks.forEach((task) => {
            console.log(`${task.id}: ${task.description} [${task.priority}] [${task.completed ? "✔" : "❌"}]`);
        });
    }
    // Marca uma tarefa como concluída
    completeTask(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task)
            return false;
        task.completed = true;
        return true;
    }
    // Remove uma tarefa
    removeTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this.tasks.length < initialLength;
    }
}
exports.ToDoList = ToDoList;
