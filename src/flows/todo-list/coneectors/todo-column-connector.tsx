import { useStore } from "effector-react";
import { $todoList, setCurrentTask } from "../models/list";
import { Column } from "../ui/organisms";

export const TodoColumnConnector = () => {
  const tasksList = useStore($todoList);

  const tasks = tasksList.map((i) => ({
    id: i.id,
    text: i.title,
    isLoading: false,
    status: i.status,
  }));

  return <Column onClick={setCurrentTask} tasks={tasks} />;
};
