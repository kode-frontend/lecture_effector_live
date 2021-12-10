import styled from "styled-components";
import { Loader } from "../../../../assets/loader";

type Status = "new" | "progress" | "done";

type Props = {
  id: string;
  text: string;
  isLoading?: boolean;
  status: Status;
  onClick: (id: string) => void;
};

const Wrapper = styled.div<{ color?: string }>`
  padding: 8px;
  padding-left: 100px;
  position: relative;
  background: ${({ color }) => color || "#ddd"};
  margin: 6px;
`;

const Id = styled.span`
  font-size: 12px;
  position: absolute;
  left: 0;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TodoItem = ({ id, text, isLoading, status, onClick }: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  const colors: Record<Status, string> = {
    done: "#88ffaf",
    new: "#f17d7d",
    progress: "#ffef5e",
  };

  return (
    <Wrapper color={colors[status]} onClick={() => onClick(id)}>
      <Id>{id}</Id> {text}
    </Wrapper>
  );
};
