import React from 'react';

class PersonForm extends React.Component {

    render() {

        const { onFirstNameChange,onLastNameChange,onAgeChange, firstName, lastName, age,
            onAddClicked, onClearAllClicked } = this.props;

        return (
            <div className="row bg-light p-4 rounded mb-3">
                <div className="col-md-3">
                    <input name='firstName' onChange={onFirstNameChange} type="text" placeholder="First Name" value={firstName} className="form-control" />
                </div>
                <div className="col-md-3">
                    <input name='lastName'  onChange={onLastNameChange} type="text" placeholder="Last Name" value={lastName}
                        className="form-control" />
                </div>
                <div className="col-md-3">
                    <input name='age'  onChange={onAgeChange} type="text" placeholder="Age" value={age}
                        className="form-control" />
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary"
                    disabled={!firstName || !lastName || !age}
                    onClick={onAddClicked}>Add</button>

                </div>
                <div className="col-md-2">
                    <button className="btn btn-warning ml-3" onClick={onClearAllClicked}>Clear All</button>

                </div>
            </div>
        );
    }
}

export default PersonForm;