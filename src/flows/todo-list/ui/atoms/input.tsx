import styled from "styled-components";

const InputEl = styled.input`
  padding: 4px;
  border: 1px solid #5e4c4c;
  border-radius: 3px;
  width: 100%;
  padding: 8px;
`;

type Props = {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputEl
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
