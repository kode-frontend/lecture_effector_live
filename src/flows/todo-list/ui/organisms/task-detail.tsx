import { useState } from "react";
import styled from "styled-components";
import { Task, TaskStatus } from "../../../../models/types";
import { TextArea, Input, HBox } from "../atoms";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  width: 640px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

type Props = {
  data?: Task;

  onClose: () => void;
  onRemove?: (id: string) => void;
  onSave?: (formData: Task) => void;

  onStatusChange: (id: string, status: TaskStatus) => void;
};
export const TaskDetail = ({
  data,
  onRemove,
  onClose,
  onSave,
  onStatusChange,
}: Props) => {
  const defaultValues: Task = {
    description: "",
    id: "",
    status: "new",
    title: "",
    userId: "",
  };

  const [formData, setFormData] = useState<Task>(data || defaultValues);

  return (
    <Overlay onClick={onClose}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Input
          onChange={(value) => {
            setFormData((prev) => ({ ...prev, title: value }));
          }}
          value={formData.title}
          placeholder="Task title"
        />
        <HBox />

        <TextArea
          onChange={(value) => {
            setFormData((prev) => ({ ...prev, description: value }));
          }}
          value={formData.description}
          placeholder="Task description"
        />

        <HBox height={32} />

        <Buttons>
          <button
            //onClick={() => setFormData((prev) => ({ ...prev, status: "new" }))}
            onClick={() => onStatusChange(formData.id, "new")}
          >
            Todo
          </button>
          <button
            // onClick={() =>
            //   setFormData((prev) => ({ ...prev, status: "progress" }))
            // }
            onClick={() => onStatusChange(formData.id, "progress")}
          >
            In progress
          </button>

          <button
            //onClick={() => setFormData((prev) => ({ ...prev, status: "done" }))}
            onClick={() => onStatusChange(formData.id, "done")}
          >
            Resolve
          </button>
          {data && onRemove && (
            <button onClick={() => onRemove(data.id)}>Remove</button>
          )}
          {onSave && <button onClick={() => onSave(formData)}>Save</button>}
        </Buttons>
      </Wrapper>
    </Overlay>
  );
};
