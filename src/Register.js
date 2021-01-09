import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEamil] = useState("");
    const history = useHistory();
    async function signUp() {
        let item = { name, password, email }

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add")

    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={email} placeholder="email" onChange={(e) => setEamil(e.target.value)} className="form-control" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>


        </div>
    )
}

export default Register