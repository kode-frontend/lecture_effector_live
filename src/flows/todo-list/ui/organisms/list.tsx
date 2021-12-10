import styled from "styled-components";

import { InputBlock } from "../molecules";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  background: #eee;

  border-radius: 12px;
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

type Props = {
  todo: JSX.Element;
  progress: JSX.Element;
  done: JSX.Element;
  isLoading?: boolean;
  onAddTask: (title: string) => void;
};

export const List = ({ done, progress, todo, isLoading, onAddTask }: Props) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      <InputBlock onAdd={onAddTask} />
      <hr />

      <Cols>
        <div>
          <h2>To do</h2>
          <hr />
          {todo}
        </div>
        <div>
          <h2>In Progress</h2>
          <hr />
          {progress}
        </div>
        <div>
          <h2>Done</h2>
          <hr />
          {done}
        </div>
      </Cols>
    </Wrapper>
  );
};
