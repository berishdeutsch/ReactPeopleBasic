import React from "react";

class PersonRow extends React.Component {
    generateTr = (person, key) => {
        let classNames = 'table-striped table-hover table-bordered';
        if (person.age > 65) {
            classNames += ' bg-danger';
        }

        return <tr key={key} className={classNames}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
        </tr>;
    }

    generateHeader = (people) => {
        if (people.length == 0) {
            return <h1>No people added yet! Add some people!</h1>
        }
        else {
            return <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
        }
    }
    render() {
        const { people } = this.props;

        return <table className='table-striped table-hover table-bordered'>
            <thead>
                {this.generateHeader(people)}
            </thead>
            <tbody>
                {

                    people.map((p, i) => this.generateTr(p, i))
                }
            </tbody>
        </table>

    }
}
export default PersonRow;

