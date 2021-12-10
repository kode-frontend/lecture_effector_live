import { combine, createEvent, createStore, restore, sample } from "effector";

import { $tasks, addTask } from "../../../models/tasks";
import { Task } from "../../../models/types";
import { $currentUser } from "../../../models/users";

export const setCurrentTask = createEvent<string>();
export const resetCurrentTask = createEvent();

export const $currentTask = createStore<Task | null>(null);

export const setDraft = createEvent<Task>();
export const resetDraft = createEvent();

export const saveTask = createEvent<Task>();

export const $draft = restore(setDraft, null);

$draft.reset(resetDraft);

$currentTask.reset(resetCurrentTask);

export const $currentUserTasks = createStore<Task[]>([]);

sample({
  clock: combine({ tasks: $tasks, currentUserId: $currentUser }),
  fn: ({ currentUserId, tasks }) => {
    const res = Object.keys(tasks)
      .reduce<Task[]>((acc, id) => (tasks[id] ? [...acc, tasks[id]] : acc), [])
      .filter((t) => t.userId === currentUserId);
    return res;
  },
  target: $currentUserTasks,
});

sample({
  clock: setCurrentTask,
  source: $tasks,
  fn: (tasks, taskId) => {
    return tasks[taskId];
  },
  target: $currentTask,
});

sample({
  clock: saveTask,
  source: $currentUser,
  fn: (userId, task) => {
    return { ...task, userId };
  },
  target: addTask,
});
