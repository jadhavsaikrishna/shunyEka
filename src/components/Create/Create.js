import React, { useState, useContext } from "react";
import "./Create.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

const Create = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [users, setUser] = useContext(UserContext);
  const [gender, setGender] = React.useState("");
  const [phoneNumber,setPhoneNumber] = React.useState(""); 
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-07-02T21:11:54")
  );
  const [employmentType, setEmploymentType] = React.useState("");
  const [monthlyIncome, setMonthlyIncome] = React.useState("");

  const classes = useStyles();
  const updateId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEmploymentType = (event) => {
    setEmploymentType(event.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateMiddleName = (e) => {
    setmiddleName(e.target.value);
  };

  const updateLastName = (e) => {
    setlastName(e.target.value);
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const updateMonthlyIncome = (e) => {
    setMonthlyIncome(e.target.value);
  };

  const updatePhoneNumber = (e) =>{
    setPhoneNumber(e.target.value);
  }

  const addUser = (e) => {
    e.preventDefault();
    setUser([
      ...users,
      {
        id: id,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        gender: gender,
        date: selectedDate,
        employType: employmentType,
        monthlyIncome: monthlyIncome,
        phoneNumber: phoneNumber,
      }
    ]);
  };

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>firstName</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={updateFirstName}
            placeholder="Enter first Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>middleName</Form.Label>
          <Form.Control
            type="text"
            value={middleName}
            onChange={updateMiddleName}
            placeholder="Enter middleName"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={updateLastName}
            placeholder="Enter lastName"
          />
        </Form.Group>
        <Form.Group>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              <h6>Employment type</h6>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={employmentType}
              onChange={handleEmploymentType}
            >
              <MenuItem value={"Salaried"}>Salaried</MenuItem>
              <MenuItem value={"Self-employed"}>Self-employed</MenuItem>
            </Select>
          </FormControl>
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
            label=" Phone number"
            variant="outlined"
          />
        </Form.Group>

        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
