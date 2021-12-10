import { createStore, createEvent } from "effector";
import { persist } from "effector-storage/local";
import { Task, TaskStatus } from "./types";

export const $tasks = createStore<Record<string, Task>>({});

persist({ store: $tasks, key: "tasks" });

export const addTask = createEvent<Task>();
export const changeStatus = createEvent<{ id: string; status: TaskStatus }>();
export const removeTask = createEvent<string>();
export const changeUser = createEvent<{ id: string; userId: string }>();

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
  console.log("result", result);
  return result;
});
