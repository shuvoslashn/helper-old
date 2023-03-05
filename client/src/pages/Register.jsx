import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';

const Register = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    let [inputType, setInputType] = useState('password');

    const handleInput = () => {
        if (inputType === 'text') {
            setInputType(() => (inputType = 'password'));
        } else {
            setInputType(() => (inputType = 'text'));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const register = () => {
        const { fullname, email, password } = user;
        axios
            .post('http://localhost:8080/api/v1/user/register', user)
            .then((res) => console.log(res))
            .catch(console.log(error));
    };

    return (
        <>
            <div className='form-area bg-light pt-5'>
                <div className='container'>
                    <div className='shadow w-50 m-auto p-5 bg-white rounded-4'>
                        <h3 className='mb-4'>Registration Form</h3>
                        <div className='single-input pb-3'>
                            <label
                                htmlFor='fullname'
                                className='pb-2 fw-medium'
                            >
                                Full Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='fullname'
                                className='form-control'
                                placeholder='ex. Jhone Doe'
                                required
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='single-input pb-3'>
                            <label htmlFor='email' className='pb-2 fw-medium'>
                                Email Address
                            </label>
                            <input
                                type='text'
                                name='email'
                                id='email'
                                className='form-control'
                                placeholder='ex. jhonedone123@gmail.com'
                                required
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='single-input pb-3'>
                            <label
                                htmlFor='password'
                                className='pb-2 fw-medium'
                            >
                                Password
                            </label>
                            <input
                                type={inputType}
                                name='password'
                                id='password'
                                className='form-control'
                                placeholder='********'
                                required
                                value={user.password}
                                onChange={handleChange}
                            />
                            <input
                                type='checkbox'
                                id='showpass'
                                className='mt-3 me-2'
                                onClick={handleInput}
                            />
                            <label htmlFor='showpass'>Show/Hide Password</label>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='btn btn-custom' onClick={register}>
                                Register Now
                            </div>
                            <p className='pt-3'>
                                Already have an account?{' '}
                                <Link to={'/login'}>Login Here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </>
    );
};

export default Register;
