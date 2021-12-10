import { createStore, createEvent, createEffect } from "effector";
import { persist } from "effector-storage/local";
import { getTasks } from "../api/get-tasks";
import { Task, TaskStatus } from "./types";

type TasksStore = Record<string, Task>;

export const $tasks = createStore<TasksStore>({});

persist({ store: $tasks, key: "tasks" });

export const updateTasks = createEvent<TasksStore>();
export const addTask = createEvent<Task>();

export const changeStatus = createEvent<{ id: string; status: TaskStatus }>();
export const removeTask = createEvent<string>();
export const changeUser = createEvent<{ id: string; userId: string }>();

$tasks.on(updateTasks, (_, payload) => payload);

$tasks.on(addTask, (state, task) => ({ ...state, [task.id]: task }));

$tasks.on(changeStatus, (state, payload) => ({
  ...state,
  [payload.id]: { ...state[payload.id], status: payload.status },
}));

$tasks.on(changeUser, (state, payload) => ({
  ...state,
  [payload.id]: { ...state[payload.id], userId: payload.userId },
}));

$tasks.on(removeTask, (state, id) => {
  const result = { ...state };
  delete result[id];
  return result;
});

export const syncTasks = createEvent();

//export const syncTasksFx = createEffect<void, void, void>();

export const $hasTasks = $tasks.map((tasks) => Object.keys(tasks).length > 0);

export const syncTasksFx = createEffect(async () => {
  const tasks = await getTasks();

  updateTasks(tasks as TasksStore);
});
