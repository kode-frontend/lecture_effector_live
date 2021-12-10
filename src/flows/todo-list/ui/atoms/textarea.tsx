import styled from "styled-components";

const TextareaEl = styled.textarea`
  padding: 4px;
  border: 1px solid #5e4c4c;
  border-radius: 3px;
  width: 100%;
  padding: 8px;

  max-width: 100%;
`;

type Props = {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const TextArea = ({ placeholder, value, onChange }: Props) => {
  return (
    <TextareaEl
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
