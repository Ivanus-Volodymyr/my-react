import React, {useState} from 'react';


const Form = () => {
    let submit=(e)=>{
        e.preventDefault();
        console.log(form);
    }

    let [form, setForm] = useState({name:'', username:'', email:''});

    let handler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <form className={'FormBlock'} onSubmit={submit}>
                <div>Input Name : <label><input type="text" name={'name'} value={form.name} onChange={handler}/></label></div>
                <div>Input UserName : <label><input type="text" name={'username'} value={form.username} onChange={handler}/></label></div>
                <div>Input Email : <label><input type="text" name={'email'} value={form.email} onChange={handler}/></label></div>
                <button>Check</button>
            </form>
        </div>
    );
};

export default Form;