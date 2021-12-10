import { useStore } from "effector-react";
import { $inprogressList, setCurrentTask } from "../models/list";
import { Column } from "../ui/organisms";

export const InprogressColumnConnector = () => {
  const tasksList = useStore($inprogressList);

  const tasks = tasksList.map((i) => ({
    id: i.id,
    text: i.title,
    isLoading: false,
    status: i.status,
  }));

  return <Column onClick={setCurrentTask} tasks={tasks} />;
};
