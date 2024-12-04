export type Priority = "High" | "Medium" | "Low";

export interface Task {
  id: number;
  description: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}
