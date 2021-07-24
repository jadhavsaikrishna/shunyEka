import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
  const [users, setUser] = useContext(UserContext);

  return (
    <div>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create User
        </Button>
      </Link>
     <div style={{marginLeft:"50px", position:"absolute", right:"150px", top:"10px"}}>
     No of Employes: 
     {
       users.length
     }
     </div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>firstName</th>
            <th>middleName</th>
            <th>lastName</th>
            <th>Gender</th>
            <th>Date</th>
            <th>EmployeeType</th>
            <th>Monthly Income</th>
            <th>PhoneNumber</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.middleName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{JSON.stringify(user.date)}</td>
              <td>{user.employType}</td>
              <td>{user.monthlyIncome}</td>
              <td>{user.phoneNumber}</td>

              <td>
                <Link to={"/read/" + user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/edit/" + user.id}>
                  <Button className="action__btn" variant="info">
                    Edit
                  </Button>
                </Link>
                <Link to={"/delete/" + user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
