import { Task, Priority } from "./task";

export class ToDoList {
  private tasks: Task[] = [];
  private nextId: number = 1;

  // Adiciona uma nova tarefa
  addTask(description: string, priority: Priority = "Medium"): Task {
    const task: Task = {
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
  listTasks(filter?: { completed?: boolean; priority?: Priority }): void {
    let filteredTasks = this.tasks;

    if (filter?.completed !== undefined) {
      filteredTasks = filteredTasks.filter((task) => task.completed === filter.completed);
    }

    if (filter?.priority) {
      filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
    }

    if (filteredTasks.length === 0) {
      console.log("No tasks found.");
      return;
    }

    filteredTasks.forEach((task) => {
      console.log(
        `${task.id}: ${task.description} [${task.priority}] [${task.completed ? "✔" : "❌"}]`
      );
    });
  }

  // Marca uma tarefa como concluída
  completeTask(id: number): boolean {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return false;

    task.completed = true;
    return true;
  }

  // Remove uma tarefa
  removeTask(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.length < initialLength;
  }
}
