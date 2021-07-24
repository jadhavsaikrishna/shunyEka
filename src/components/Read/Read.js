import React from "react";
import "./Read.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>FirstName: {user[0].firstName}</h1>
      <h1>MiddleName: {user[0].middleName}</h1>
      <h1>Lastname: {user[0].lastName} </h1>
      <h1>Gender: {user[0].gender} </h1>
      <h1>Date: {JSON.stringify(user[0].date)} </h1>
      <h1>EmploymentType: {user[0].employType} </h1>
      <h1>MonthlyIncome: {user[0].monthlyIncome} </h1>
      <h1>PhoneNumber: {user[0].PhoneNumber} </h1>


      <Link to="/">
        <Button variant="info">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Read;
