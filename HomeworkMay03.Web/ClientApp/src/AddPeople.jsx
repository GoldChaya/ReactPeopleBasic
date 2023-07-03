import React from 'react';
import './App.css';
import PersonForm from './PersonForm';
import PersonRow from './PersonForm';

class AddPeople extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
    }

    onFirstNameChange = e => {
        const copy = { ...this.state.person, firstName: e.target.value }
        this.setState({ person: copy });
    }
    onLastNameChange = e => {
        const copy = { ...this.state.person, lastName: e.target.value }
        this.setState({ person: copy });
    }
    onAgeChange = e => {
        const copy = { ...this.state.person, age: e.target.value }
        this.setState({ person: copy });
    }
    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onAddClicked = () => {
        const copy = [...this.state.people];
        copy.push(this.state.person);
        this.setState({
            people: copy,
            person:
            {
                firstName: '',
                lastName: '',
                age: ''
            }
        })
    }

    onClearAllClicked = () => {
        this.setState({ people: [], person: { firstName: '', lastName: '', age: '' } })

    }

    render() {
        const { people } = this.state;
        const { firstName, lastName, age } = this.state.person;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    onAddClicked={this.onAddClicked}
                    onClearAllClicked={this.onClearAllClicked}
                />

                {!people.length && <h1>No people added yet! Add some people!</h1>}
                {!!people.length && <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p) => <tr className={+p.age>65 ? 'table-danger':''}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.age}</td>
                        </tr>)}
                    </tbody>
                </table>}

            </div>);

    }
};

export default AddPeople;