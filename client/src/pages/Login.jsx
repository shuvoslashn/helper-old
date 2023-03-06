import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axiosInterceptor.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
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

    // Login function
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('api/auth/users/login', user);
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('email', res.data.email);
                toast.success('Login Successful');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast(res.data.message);
            }
        } catch (error) {
            toast.error('Invalid information');
        }
    };

    return (
        <>
            <div className='form-area pt-5'>
                <div className='container'>
                    <form
                        onSubmit={handleLogin}
                        className='shadow w-50 m-auto p-5 bg-white rounded-4'
                    >
                        <h3 className='mb-4'>Login Form</h3>

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
                                Login Now
                            </button>

                            <p className='pt-3'>
                                Not have an account?{' '}
                                <Link to={'/register'}>Register Now</Link>
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

export default Login;
