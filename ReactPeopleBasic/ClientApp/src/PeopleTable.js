
import react from 'react';
import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends react.Component {
    state = {
        people: [],
        firstName: '',
        lastName: '',
        age: ''
    }
    onAddClick = () => {
        const { people, firstName, lastName, age } = this.state;
        const person = { firstName, lastName, age };
        this.setState({ people: [person, ...people], firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
        const { people } = this.state;
        this.setState({ people: [] });
    }

    onTextFirstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }

    onTextLastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }

    onTextAgeChange = e => {
        this.setState({ age: e.target.value })
    }

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onTextFirstNameChange={this.onTextFirstNameChange}
                    onTextLastNameChange={this.onTextLastNameChange}
                    onTextAgeChange={this.onTextAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                <PersonRow people={this.state.people} />

            </div>
        )
    }
}

export default PeopleTable;