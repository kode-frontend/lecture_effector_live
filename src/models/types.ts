export type User = {
  name: string;
  id: string;
};

export type TaskStatus = "new" | "progress" | "done";
export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  userId: string;
};
