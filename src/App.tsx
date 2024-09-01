import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUsers } from "./redux/features/usersSlice";
import { User } from "./types/userTypes";

import Table from "./components/Table";
import Searchbar from "./components/searchbar";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        const filteredUsers = response.map(
          ({ id, name, username, email, phone }: User) => ({
            id,
            name,
            username,
            email,
            phone,
          })
        );
        dispatch(setUsers(filteredUsers));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="container">
      <Searchbar />
      <Table />
    </div>
  );
}

export default App;
