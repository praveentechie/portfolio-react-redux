import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css 
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
 
class DateRangePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate:moment(),
      selectedDate:moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: new Date(),
      endDate:date
    });
  }
 
  render() {
   this.state.selectedDate = moment(this.state.startDate).format('MM/DD/YYYY') +':'+ moment(this.state.endDate).format('MM/DD/YYYY') 
    return( <DatePicker
        selected={this.state.startDate}
        startDate={this.state.startDate}
        onChange={this.handleChange}
        endDate={this.state.endDate}
        value={this.state.selectedDate}
        selectsStart
        selectsEnd
    />);
  }
}
export default DateRangePicker;