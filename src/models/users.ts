import { createStore, createEvent, restore } from "effector";
import { persist } from "effector-storage/local";
import { User } from "./types";

export const $users = createStore<Record<string, User>>({});

persist({ store: $users, key: "users" });

export const setUsers = createEvent<User[]>();

export const addUser = createEvent<User>();
export const updateUser = createEvent<User>();
export const removeUser = createEvent<string>();
export const setCurrentUser = createEvent<string>();

$users.on(addUser, (state, newUser) => ({ ...state, [newUser.id]: newUser }));

$users.on(removeUser, (state, id) => {
  const result = { ...state };
  delete result[id];
  return result;
});

$users.on(setUsers, (_, payload) =>
  payload.reduce((acc, current) => ({ ...acc, [current.id]: current }), {})
);

export const $currentUser = restore(setCurrentUser, "");

persist({ store: $currentUser, key: "current-users" });
