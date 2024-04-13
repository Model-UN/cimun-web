import { Title } from "../../components/infoColumns/infoColumns.styles";
import { Body, SubTitle } from "../../styles/typography";
import { MaterialCard,
  PillButton,
  PillButtonRow,} from "../../app/components/elements";
import { colors } from "../../styles/colors";
import{
  addStudent,
} from "../../services/axiosHandler";
import { useState } from "react";
import React from "react";
import axios from "axios";

  export default function Student() {
    const [state, setState] = React.useState({
      aDA : "",
      advisorId : "",
      arrivalDate : "",
      banquetTable : "",
      committeeId : "",
      position : "",
      departureDate : "",
      dietaryNeeds : "",
      firstName : "",
      lastName : "",
      roomNumber : ""
    });
  
    function handleChange(e) {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      let formData = new FormData();
  
      for (let [key, value] of Object.entries(state)) {
        formData.append(key, value);
      }
  
      // Use fetch or axios to submit the form
      addStudent(formData)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={state.firstName}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={state.lastName}
          required
        />
        <input
          name="committeeId"
          placeholder="Committee Id"
          onChange={handleChange}
          value={state.committeeId}
          required
        />
        <input
          name="position"
          placeholder="Position"
          onChange={handleChange}
          value={state.position}
          required
        />
        <input
          name="roomNumber"
          placeholder="Room Number"
          onChange={handleChange}
          value={state.roomNumber}
          required
        />
        <input
          name="advisorId"
          placeholder="Advisor Id"
          onChange={handleChange}
          value={state.advisorId}
          required
        />
        <input
          name="aDA"
          placeholder="ADA Needed"
          onChange={handleChange}
          value={state.aDA}
          required
        />
        <input
          name="dietaryNeeds"
          placeholder="Dietary Needs"
          onChange={handleChange}
          value={state.dietaryNeeds}
          required
        />
        <input
          name="arrivalDate"
          placeholder="Arrival Date"
          onChange={handleChange}
          value={state.arrivalDate}
          required
        />
        <input
          name="departureDate"
          placeholder="Departure Date"
          onChange={handleChange}
          value={state.departureDate}
          required
        />
        <button type="submit">Send</button>
      </form>
    );
  }