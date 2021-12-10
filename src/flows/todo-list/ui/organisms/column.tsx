import { ComponentProps } from "react";
import { TodoItem } from "../atoms";

type Props = {
  tasks: Omit<ComponentProps<typeof TodoItem>, "onClick">[];
  onClick: (id: string) => void;
};
export const Column = ({ tasks, onClick }: Props) => {
  return (
    <>
      {tasks.map((t) => (
        <TodoItem key={t.id} {...t} onClick={onClick} />
      ))}
    </>
  );
};
