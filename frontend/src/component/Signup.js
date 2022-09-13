import React from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const API_URL = 'http://localhost:3001/api/v1/users/register';

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

export default function Signup() {
    const { register, formState: { errors }, handleSubmit, watch, getValues } = useForm({});

    const onSubmit = async data => {
        const nazwa = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        await loginUser(nazwa)

    }


    return (
        <Container className='d-flex justify-content-center align-items-center h-100' style={{ minHeight: '100vh' }}>
            <div className="w-100 " style={{ maxWidth: "600px" }}>
                <Card className="p-5" style={{ borderRadius: '1rem' }}>
                    <Card.Body >
                        <h2 className='text-center mb-4'> Register</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group id='name' className='mb-4 fs-4'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className='form-control-lg'
                                    type='text'
                                    {...register('name', {
                                        required: 'This is required',
                                        minLength: {
                                            value: 3,
                                            message: "Should be at least 3 characters"
                                        }
                                    })}
                                />
                                {errors.name && <span className='text-danger fs-5'>{errors.name.message} </span>}
                            </Form.Group>
                            <Form.Group id='email' className='mb-4 fs-4'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className='form-control-lg'
                                    type='email'
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className='text-danger fs-5'>Should be a valid email adress</span>
                                )}
                            </Form.Group>
                            <Form.Group id='password' className='mb-4 fs-4'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className='form-control-lg'
                                    type='password'
                                    {...register('password', {
                                        required: "You must specify password",
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            message: "Password must contain at least 8 character, one special, one number!"
                                        },
                                    })}
                                />
                                {errors.password && <span className='text-danger fs-5'>{errors.password.message}</span>}
                            </Form.Group>
                            <Form.Group id='password_repeat' className='mb-4 fs-4'>
                                <Form.Label>Reapeat Password</Form.Label>
                                <Form.Control
                                    className='form-control-lg'
                                    type='password'
                                    {...register('password_repeat', {
                                        required: "You must repeat your password",
                                        validate: (value) => {
                                            const { password } = getValues();
                                            if (password != value) {
                                                return "Passwords should match!"
                                            };
                                        }
                                    })}
                                />
                                {errors.password_repeat && <span className='text-danger fs-5'>{errors.password_repeat.message} </span>}
                            </Form.Group>

                            <Button className='w-100 btn-lg' type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Body>
                    <div className='w-100 text-center mb-4 fs-5 py-3'>
                        Alredy have an account?<Link to="/login">Login</Link>
                    </div>
                </Card>

            </div>
        </Container >
    )
}
