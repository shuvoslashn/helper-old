import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axiosInterceptor.jsx';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
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

    // Register function
    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await axios.post('api/auth/users/register', user);

        if (res.status === 201) {
            toast.success('Registration Successful');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    return (
        <>
            <div className='form-area pt-5'>
                <div className='container'>
                    <form
                        onSubmit={handleRegister}
                        className='shadow w-50 m-auto p-5 bg-white rounded-4'
                    >
                        <h3 className='mb-4'>Registration Form</h3>
                        <div className='single-input pb-3'>
                            <label htmlFor='name' className='pb-2 fw-medium'>
                                Full Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
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
                            <button type='submit' className='btn btn-custom'>
                                Register Now
                            </button>

                            <p className='pt-3'>
                                Already have an account?{' '}
                                <Link to={'/login'}>Login Here</Link>
                            </p>
                        </div>
                        <ToastContainer />
                    </form>
                    <div className='py-4 text-center'>
                        <i className='bi bi-arrow-left-short' />
                        <Link to={'/'}>Back to Home</Link>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </>
    );
};

export default Register;
