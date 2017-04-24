import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
//import  DateUtils  from 'react-day-picker';


const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0, 1, 0, 0);
const toMonth = new Date(currentYear + 10, 11, 31, 23, 59);
const overlayStyle = {
  position: 'absolute',
  background: 'white',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)'
};
// Component will receive date, locale and localeUtils props
function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <div className="DayPicker-Caption">
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
    </div>
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
    let clickedInside = false;
    this.showCurrentDate = this.showCurrentDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  showCurrentDate() {
    this.setState({
      showDatePicker: true
    });
    //  this.daypicker.showMonth(this.state.month);
  }
handleInputBlur () {
    const showDatePicker = this.clickedInside;

    this.setState({
      showDatePicker
    });

    // Force input's focus if blur event was caused by clicking on the calendar
    if (showDatePicker) {
      this.input.focus();
    }
  }
  handleContainerMouseDown () {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
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
    //console.log("clicked...");
  }

  handleYearMonthChange(month) {
    //console.log("clicked-2...");
    this.setState({ month});
  }

  render() {
    const { from, to } = this.state;
    const selectedDay = from ? moment(from).format('L') + '-' + moment(to).format('L') : ""; //moment(this.state.value, 'L', true).toDate();
    
    return (
      <div onMouseDown={this.handleContainerMouseDown}>
        <p>
          <input
            type="text"
            value={selectedDay}
            placeholder="mm/dd/yyyy"
            onChange={this.handleInputChange}
            onFocus={this.showCurrentDate}
          onBlur={this.handleInputBlur}
          />
        </p>
        <div>
         {this.state.showDatePicker &&
          <div style={{ position: 'relative' }}>
            <div style={overlayStyle}>
        <DayPicker
          month={this.state.month}
          fromMonth={fromMonth}
          toMonth={toMonth}
          dateFormat="dd-mm-yyyy"
          onDayClick={this.handleDayClick}
          selectedDays={[from, { from, to }]}
          canChangeMonth={false}
          captionElement={
            <YearMonthForm onChange={this.handleYearMonthChange} />
          }
    />
    </div>
          </div>}
          
        </div>
      </div>
    );
  }
  
}