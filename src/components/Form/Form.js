import React, {useState} from 'react';

import {jsonPlaceholder} from "../../service/jsonplaceholder.service";
import User from "../User/User";


const Form = () => {

    let [users, setUsers] = useState([]);
    let [form, setForm] = useState({name: '', username: '', email: ''});

    let handler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    let submit = (e) => {
        e.preventDefault();
        jsonPlaceholder.getUsers()
            .then(users => setUsers(users.filter(value =>
                value.name.toLowerCase().includes(form.name)
                && value.username.toLowerCase().includes(form.username)
                && value.email.toLowerCase().includes(form.email))));

    }

    return (
        <div>
            <form className={'FormBlock'} onSubmit={submit}>
                <div>Input Name : <label><input type="text" name={'name'} value={form.name} onChange={handler}/></label></div>
                <div>Input UserName : <label><input type="text" name={'username'} value={form.username} onChange={handler}/></label></div>
                <div>Input Email : <label><input type="text" name={'email'} value={form.email} onChange={handler}/></label></div>
                <button>Check</button>
            </form>


            <div className={'Users'}>
                {users.map(value => <User key={value.id}  name={value.name} username={value.username} email={value.email}/>)}
            </div>
        </div>
    );
};

export default Form;