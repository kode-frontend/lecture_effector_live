import { tasksMockData } from "./tasks-mock";

export const getTasks = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksMockData);
    }, 3000);
  });
