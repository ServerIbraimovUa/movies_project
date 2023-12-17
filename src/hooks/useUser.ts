import { useEffect, useState } from "react";
import { UserType } from "../types/user";
import { updateData } from "../db/updateData";
import { writeUserData } from "../db/writeData";
import { readData } from "../db/readData";

export const UseUser = () => {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    if (user) {
      try {
        updateData(user);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, [user]);

  function createUser(user: UserType) {
    writeUserData(user);
  }
  function deleteUser(uid: string) {
    deleteUser(uid);
  }
  function readUser(uid: string) {
    readData(uid);
  }
  return { user, setUser, createUser, deleteUser, readUser };
};