import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const {name , value}= event.target;
        /**
         * const name = event.target.name;
         * const value = event.target.value;
         */
        props.change(name , value);
    }

    const handleSubmit = event =>{
        event.preventDeafault();
        props.submit();
    }


    return (
    <form onSubmit= {handleSubmit}>
        <label>name
        <input 
    placeholder='enter your name here!'
        value={props.values.name}
        name='name'
        onChange={handleChange}
        />
        </label>
        <label>Email
        <input
            placeholder='Enter your email here!'
            value={props.values.email}
            name='email'
            onchange={handleChange}
        />
        </label>
        <label>Role
            <input
            placeholder='enter your role here!'
            value={props.values.role}
            name='role'
            onchange={handleChange}
        />
        </label>
    </form>
    )
}

export default Form;