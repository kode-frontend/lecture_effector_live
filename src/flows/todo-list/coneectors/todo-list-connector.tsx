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
import { Task } from "../../../models/types";
import { removeTask } from "../../../models/tasks";

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
  const currentUser = useStore($currentUser) || "";
  const users = useStore($users);

  const draft = useStore($draft);

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
        />
      )}
      {draft && (
        <TaskDetail onClose={resetDraft} data={draft} onSave={saveHandler} />
      )}
    </>
  );
};
