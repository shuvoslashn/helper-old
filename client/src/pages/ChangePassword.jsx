import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axiosInterceptor.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const [user, setUser] = useState({
        newPassword: '',
        confirmPassword: '',
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/login');
    };

    // ChangePassword function
    const handleChangePassword = async (e) => {
        e.preventDefault();
        const res = await axios.post('api/auth/change-password', user, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        if (res.status === 201) {
            toast.success('Password Change Successfully');
            setTimeout(() => {
                handleLogout();
                navigate('/login');
            }, 1500);
        }
    };

    return (
        <>
            <div className='form-area pt-5'>
                <div className='container'>
                    <form
                        onSubmit={handleChangePassword}
                        className='shadow w-50 m-auto p-5 bg-white rounded-4'
                    >
                        <h3 className='mb-4'>Reset Password</h3>

                        <div className='single-input pb-3'>
                            <label
                                htmlFor='newPassword'
                                className='pb-2 fw-medium'
                            >
                                New Password
                            </label>
                            <input
                                type={inputType}
                                name='newPassword'
                                id='newPassword'
                                className='form-control'
                                placeholder='ex. *******'
                                required
                                value={user.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='single-input pb-3'>
                            <label
                                htmlFor='confirmPassword'
                                className='pb-2 fw-medium'
                            >
                                Confirm Password
                            </label>
                            <input
                                type={inputType}
                                name='confirmPassword'
                                id='confirmPassword'
                                className='form-control'
                                placeholder='********'
                                required
                                value={user.confirmPassword}
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
                                ChangePassword Now
                            </button>

                            <p className='pt-3'>
                                Back to Login{' '}
                                <Link to={'/register'}>Login</Link>
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

export default ChangePassword;
