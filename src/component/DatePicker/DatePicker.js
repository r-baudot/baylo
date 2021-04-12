import moment from "moment";
import MomentUtils from "@date-io/moment";

import React from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import "moment/locale/fr";
moment.locale("fr");

const DatePickerCUI = ({selectedDate, handleDateChange}) => {

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <h1>DatePickerCUI</h1>
      <DatePicker
        value={selectedDate}
        format="DD/MM/yyyy"
        onChange={(date) => handleDateChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerCUI;
