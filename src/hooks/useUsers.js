import { useEffect, useState } from "react";
import { getUsers } from "../service/UsersService";

function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const users = await getUsers();
      setUsers(users);
    }

    loadUsers();
  }, []);

  return users;
}

export default useUsers;
