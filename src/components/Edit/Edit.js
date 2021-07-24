import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-07-02T21:11:54")
  );
  const [firstName, setFirstName] = useState(user[0].firstName);
  const [lastName, setLastName] = useState(user[0].lastName);
  const [middleName, setMiddleName] = useState(user[0].middleName);
  const [gender, setGender] = useState(user[0].gender);
  const [monthlyIncome, setMonthlyIncome] = useState(user[0].monthlyIncome);
  const [phoneNumber,setPhoneNumber] = React.useState(user[0].phoneNumber); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const editFirstName = (e) => {
    setFirstName(e.target.value);
    const edited_firstname = firstName;
    user[0].firstName = edited_firstname;
  };
  const editLastName = (e) => {
    setLastName(e.target.value);
    const edited_lastname = lastName;
    user[0].lastName = edited_lastname;
  };
  const editMiddleName = (e) => {
    setMiddleName(e.target.value);
    const edited_middlename = middleName;
    user[0].middleName = edited_middlename;
  };

  const editGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
    const edited_gender = gender;
    console.log(edited_gender);
    user[0].gender = edited_gender;
  };
  const updateMonthlyIncome = (e) => {
    setMonthlyIncome(e.target.value);
    const edited_monthlyincome = monthlyIncome;
    console.log(monthlyIncome);
    user[0].monthlyIncome = edited_monthlyincome;
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    const edited_phonenumber = phoneNumber;
    console.log(phoneNumber);
    user[0].phoneNumber = edited_phonenumber;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Firstame</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={editFirstName}
            placeholder={user[0].firstName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>MiddleNme</Form.Label>
          <Form.Control
            type="text"
            value={middleName}
            onChange={editMiddleName}
            placeholder={user[0].middleName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>lastName</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={lastName}
            onChange={editLastName}
            placeholder={user[0].position}
          />
        </Form.Group>

        <Form.Group>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={editGender}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Form.Group>
        <Form.Group>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Form.Group>
        <Form.Group>
          <TextField
            value={monthlyIncome}
            onChange={updateMonthlyIncome}
            type="number"
            label=" Monthly Income"
            variant="outlined"
          />
        </Form.Group>
        <Form.Group>
          <TextField
            value={phoneNumber}
            onChange={updatePhoneNumber}
            type="number"
            label=" Phone Number"
            variant="outlined"
          />
        </Form.Group>
        
        <Link to="/">
          <Button onSubmit={() => editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
