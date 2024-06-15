import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/users/");
        setUsers(data);
      } catch (error) {
        console.log(error.response.data);
        setError(error.response.data.message);
      }
    };
    fetchUsers();
  }, []);

  const elements = users.map(({ id, title, director }) => (
    <li key={id}>
      Title: {title}. Director: {director}.
    </li>
  ));

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return <ul>{elements}</ul>;
}
