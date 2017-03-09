import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    //Initialize state and bind functions
    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
      
// Bind can done in given in render function too but it degrades the performance.
// It beeter to use bind calls in the constructor.
      
    }
 

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

     redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render(){
        const {courses}=this.props;
        return(
            <div>
                <h1>Courses</h1>
                  <input type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage}/>
            
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
     
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
//connect: connect function to redux store
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);