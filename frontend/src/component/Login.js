import React from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const API_URL = 'http://localhost:3001/api/v1/auth/login';

async function loginUser(credentials) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login1() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const response = await loginUser(data);

        if ('accessToken' in response) {
            swal("Success", "Succesful login", "success", {
                buttons: false,
                timer: 1000,
            })
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['name']));
                    window.location.href = "/";
                });
        } else {
            swal("Failed", response.error, "error");
        }

    }

    return (
        <Container className='d-flex justify-content-center align-items-center h-100' style={{ minHeight: '100vh' }}>
            <div className="w-100 " style={{ maxWidth: "600px" }}>
                <Card className="p-5" style={{ borderRadius: '1rem' }}>
                    <Card.Body >
                        <h2 className='text-center mb-4'> Login</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group id='email' className='mb-4 fs-4'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control className='form-control-lg ' type='email' required
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className='text-danger fs-5'>Should be an valid email adress</span>
                                )}

                            </Form.Group>
                            <Form.Group id='password' className='mb-4 fs-4'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='form-control-lg' type='password'
                                    {...register('password', {
                                        required: "You must specify password",
                                    })}
                                />
                                {errors.password && <span className='text-danger fs-5'>{errors.password.message}</span>}
                            </Form.Group>



                            <Button className='w-100 btn-lg' type='submit'>Login</Button>
                        </Form>
                    </Card.Body>
                    <div className='w-100 text-center mb-4 fs-5 py-3'>
                        Do not have an account?<Link to="/register">Register</Link>
                    </div>
                </Card>

            </div>
        </Container >)
}
