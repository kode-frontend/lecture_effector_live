import { ComponentProps } from "react";
import styled from "styled-components";

import { TodoItem } from "../atoms";
import { InputBlock } from "../molecules";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  background: #eee;

  border-radius: 12px;
`;

type Props = {
  list: Omit<ComponentProps<typeof TodoItem>, "onClick">[];
  onClick: (id: string) => void;
  onAddTask: (title: string) => void;
};

export const List = ({ list, onClick, onAddTask }: Props) => {
  return (
    <Wrapper>
      <InputBlock onAdd={onAddTask} />
      <hr />
      {list.map((l) => (
        <TodoItem key={l.id} {...l} onClick={onClick} />
      ))}
    </Wrapper>
  );
};
