import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age, onAddClick, onClearClick, onTextFirstNameChange, onTextLastNameChange, onTextAgeChange } = this.props;
        return (
            <div className="row jumbotron">
                <div className="col-md-3">
                    <input value={firstName} onChange={onTextFirstNameChange} placeholder="First Name" className="form-control" />
                </div>
                <div className="col-md-3">
                    <input value={lastName} onChange={onTextLastNameChange} placeholder="Last Name" className="form-control" />
                </div>
                <div className="col-md-3">
                    <input value={age} onChange={onTextAgeChange} placeholder="Age" className="form-control" />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button className="btn btn-warning ml-3" onClick={onClearClick}>Clear All</button>
                </div>
            </div>
        )
    }
}

export default PersonForm;