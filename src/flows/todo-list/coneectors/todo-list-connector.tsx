import { useStore } from "effector-react";
import { TaskDetail } from "../ui/organisms";
import { List } from "../ui/organisms/list";

import {
  $currentTask,
  setDraft,
  $draft,
  resetDraft,
  saveTask,
  resetCurrentTask,
} from "../models/list";

import { DoneColumnConnector } from "./done-column-connector";
import { InprogressColumnConnector } from "./inprogress-column-connector";
import { TodoColumnConnector } from "./todo-column-connector";

import {
  $currentUser,
  $users,
  setUsers,
  setCurrentUser,
} from "../../../models/users";
import { Select } from "../ui/atoms";
import styled from "styled-components";
import { useEffect } from "react";
import { usersMock } from "./mocks";
import { Task, TaskStatus } from "../../../models/types";
import { changeStatus, removeTask } from "../../../models/tasks";

const UserListPositioner = styled.div`
  position: fixed;
  top: 30%;
  left: 16px;
`;

export const TodoListConnector = () => {
  useEffect(() => {
    setUsers(usersMock);
    setCurrentUser(usersMock[0].id);
  }, []);

  const currentTask = useStore($currentTask);

  console.log("currentTask", currentTask);
  const currentUser = useStore($currentUser) || "";
  const users = useStore($users);

  const draft = useStore($draft);

  console.log("draft", draft);

  const usersOptions = Object.keys(users).map((id) => ({
    title: users[id].name,
    value: users[id].id,
  }));

  const saveHandler = (formData: Task) => {
    saveTask({
      ...formData,
    });
    resetCurrentTask();
    resetDraft();
  };

  const statusChangeHandler = (id: string, status: TaskStatus) => {
    changeStatus({
      id,
      status,
    });
    resetCurrentTask();
  };

  return (
    <>
      <UserListPositioner>
        <Select
          options={usersOptions}
          onChange={setCurrentUser}
          value={currentUser}
        />
      </UserListPositioner>

      <List
        onAddTask={(title) =>
          setDraft({
            id: String(Date.now()),
            title,
            description: "",
            status: "new",
            userId: currentUser,
          })
        }
        done={<DoneColumnConnector />}
        progress={<InprogressColumnConnector />}
        todo={<TodoColumnConnector />}
      />
      {currentTask && (
        <TaskDetail
          onClose={() => resetCurrentTask()}
          data={currentTask}
          onRemove={removeTask}
          onSave={saveHandler}
          onStatusChange={statusChangeHandler}
        />
      )}
      {draft && (
        <TaskDetail
          onClose={resetDraft}
          data={draft}
          onSave={saveHandler}
          onStatusChange={statusChangeHandler}
        />
      )}
    </>
  );
};
