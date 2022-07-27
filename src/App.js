import React, {useState} from 'react';
import Form from './components/form';




/**
 * create state variables to hold team members and hold form values
 * 
 * create update and submit functions
 */

function App() {
  const [members, setMembers] = useState ([]);
  const [values, setValues] = useState ({name:'', email:'', role:''});

  const onSubmit= ()=>{
    setMembers ([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
    setValues({name:'', email:'', role:''});
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
        <Form
        values = {values}
        change = {onChange}
        submit = {onSubmit}
        />
        {members.map (member => {
          return(
            <div>
              {members.email}, {members.name}, {members.role}
            </div>
          )
        })}
    </div>
  );
}

export default App;
