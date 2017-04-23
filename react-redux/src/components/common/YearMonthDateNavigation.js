/*import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';


const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0, 1, 0, 0);
const toMonth = new Date(currentYear + 10, 11, 31, 23, 59);

// Component will receive date, locale and localeUtils props
function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(newDate(year.value, month.value));
  };
const  onChange = function(e) {
    this.setState({selected: e.target.form});
  },
  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => <option key={i} value={i}>{month}</option>)}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

export default class YearMonthDateNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      from: null,
      to: null,
      value: moment().format('L'), // The value of the input field
      month: new Date(), // The month to display in the calendar
      showDatePicker: false // Show/Hide date picker
    };
    this.showCurrentDate = this.showCurrentDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);

  }
  showCurrentDate() {
    this.setState({
      showDatePicker: true
    });
    //  this.daypicker.showMonth(this.state.month);
  }

  handleInputChange(e) {
    const { value } = e.target;

    // Change the current month only if the value entered by the user
    // is a valid date, according to the `L` format
    if (moment(value, 'L', true).isValid()) {
      this.setState(
        {
          month: moment(value, 'L').toDate(),
          value
        },
        this.showCurrentDate
      );
    } else {
      this.setState({ value }, this.showCurrentDate);
    }
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({ showDatePicker: false });

  }

  render() {
    return (
      <div className="YearNavigation">
        <DayPicker
          month={this.state.month}
          fromMonth={fromMonth}
          toMonth={toMonth}
          captionElement={
            <YearMonthForm onChange={this.handleYearMonthChange} />
          }
        />
      </div>
    );
  }
}*/