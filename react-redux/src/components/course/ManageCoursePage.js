import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import moment from 'moment';
class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false,
            isSaving:true

        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillUpdate(nextProps,nextState){
        //console.log(nextProps);
        //console.log(nextState);
      
        if(!nextProps.course.title){
            if(nextState.course.authorId && nextState.course.title ){
            //this.setState({saving : false});
            //nextState.saving = false;
            nextState.isSaving = false;
             }
        }
        else {
            if(nextProps.course.length === nextState.course.length){
            //this.setState({saving : true});
            nextState.isSaving = true;
             }
        }
        
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            //necessary to populate from when existing course is loaded directly.
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        debugger;
        console.log(moment)
        var d = moment(event);
        d.month(); // 1
        d.format('ddd MMM DD YYYY'); // 'Mon Feb 01 2016'
        console.log(d);
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
       this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }
    redirect() {
//        this.setState({ saving: false });
        toastr.success('Course save');
        this.context.router.push('/courses');
    }
    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
                isSaving={this.state.isSaving}
                />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0]; //since filter returns array, grab the first element.
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from '/course/:id'
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFromattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFromattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);