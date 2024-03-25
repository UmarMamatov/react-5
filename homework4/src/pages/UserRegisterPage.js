import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction } from "../redux/actions";

const UserRegisterPage = () => {
    const dispatch = useDispatch();
    const { preloader } = useSelector(state => state.UserInfoReducer)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUserAction(formData));
    };
    console.log(formData)

    return (
        <React.Fragment>
            {preloader ? (
                <Spinner animation="border" variant="success" />
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </React.Fragment>
    );
};

export default UserRegisterPage;
