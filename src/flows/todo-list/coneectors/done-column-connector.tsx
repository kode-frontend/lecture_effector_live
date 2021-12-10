import { useStore } from "effector-react";
import { $doneList, setCurrentTask } from "../models/list";
import { Column } from "../ui/organisms";

export const DoneColumnConnector = () => {
  const tasksList = useStore($doneList);

  const tasks = tasksList.map((i) => ({
    id: i.id,
    text: i.title,
    isLoading: false,
    status: i.status,
  }));

  return <Column onClick={setCurrentTask} tasks={tasks} />;
};
