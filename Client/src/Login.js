import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Components/auth';


export const Login = () => {
    const [input, setInput] = useState({
        user: "",
        password: ""
    })
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/dashboard'

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
    }

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         let res = await fetch("http://localhost:3001/users/fetch-users");
    //         let data = await res.json();
    //         if (res.ok) {
    //             var filtereddata = data.find(item => item.username === user)
    //             console.log('filteredData', filtereddata)         
    //           }
    //     };
    //     fetchUsers()
    // }, []);

    // const handleLogin = () => {
    //     if (user === "Test" && password === "Test123") {
    //         auth.login(user, password);
    //         navigate(redirectPath, { replace: true });
    //         window.location.reload(false);
    //     }
    //     else { alert('Wrong username and/or password') }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = input.user
        console.log(input)
        auth.login(user);
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        })
    }

    function btnClick() {
        if (input.user === undefined || input.user === "") {
            alert("Username is required");
        }
        if (input.password === undefined || input.password === "") {
            alert("Password is required");
        }
    }

    return (
        <div>
            <Container>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            name='user'
                            value={input.user}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={input.password}
                            type="password"
                            onChange={handleChange} />
                    </Form.Group>
                    <Button variant='primary' type='submit' onClick={btnClick}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}
