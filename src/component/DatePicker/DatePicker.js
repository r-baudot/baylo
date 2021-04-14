import moment from "moment";
import MomentUtils from "@date-io/moment";

import styled from "styled-components";

import React from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import "moment/locale/fr";
moment.locale("fr");



const Styled = styled.div`
  display: flex;
  vertical-align: middle;
  margin: 2em 0 1em;
  h1{
    margin:0;
    padding-right:1em;
    font-family: sans-serif;
  }
`;


const DatePickerCUI = ({selectedDate, handleDateChange}) => {

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Styled>
      <h1>DatePickerCUI</h1>
      <DatePicker
        value={selectedDate}
        format="DD/MM/yyyy"
        onChange={(date) => handleDateChange(date)}
      /></Styled>
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerCUI;
