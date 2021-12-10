type Option = {
  title: string;
  value: string;
};

type Props = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
};
export const Select = ({ onChange, options, value }: Props) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o.value} selected={o.value === value} value={o.value}>
          {o.title}
        </option>
      ))}
    </select>
  );
};
