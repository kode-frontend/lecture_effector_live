import { useState } from "react";
import styled from "styled-components";
import { Input } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

type Props = {
  onAdd: (Value: string) => void;
};

export const InputBlock = ({ onAdd }: Props) => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Input value={value} placeholder="Enter task title" onChange={setValue} />
      <button
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
      >
        Add
      </button>
    </Wrapper>
  );
};
