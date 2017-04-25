import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
//import YearNavigation from '../common/YearNavigation';
import YearMonthDateNavigation from '../common/DatePickertester';
import DropDown from '../common/DropDown';



const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors,isSaving}) => {
       return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>
           <DropDown/>
           
            <input 
                type="submit"
                disabled={isSaving||saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
     <YearMonthDateNavigation/>
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    isSaving:React.PropTypes.bool,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;