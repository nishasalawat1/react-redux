import React from 'react';

const User = (props) => {
    return (
        <div>
            <h1>Hello</h1> 
            <div>Name {props.data.name}</div>
            <div>Age {props.data.age}</div>
        </div>
    );
};

export default User;