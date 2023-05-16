import "./shared.css";
import { useState } from "react";
import { User, Users } from "../types/types";
import Card from "react-bootstrap/Card";
import RenderUsers from "./RenderUsers";

const Peoples = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<Users>([]);

  const getUser = async () => {
    setShowUser(false);
    setCurrentUser(null);
    const url = "https://fake-users6.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "51427f28b5mshfbd0334a294cd80p16ef0fjsn7d95525de3a3",
        "X-RapidAPI-Host": "fake-users6.p.rapidapi.com"
      }
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        const newUser: User = {
          username: res.results[0].login.username,
          pfp: res.results[0].picture.large
        };
        setCurrentUser(newUser);
        setShowUser(true);
        setShowUsers(true);
        const newUsers = [...users, newUser];
        setUsers(newUsers);
        console.log(users);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="main-users">
      <h1>Peoples</h1>
      <div className="content  mt-4">
        <button onClick={() => getUser()} className="btn btn-primary">
          Get New User
        </button>
      </div>
      {showUser ? (
        <div className="content  mt-4">
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={currentUser?.pfp} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1rem", textAlign: "center" }}>
                {currentUser?.username}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ) : null}
      <h1 className="mt-3">Existing Users</h1>
      <div className="content  mt-4 pb-5">
        {showUsers ? <RenderUsers users={users} /> : null}
      </div>
    </div>
  );
};

export default Peoples;
