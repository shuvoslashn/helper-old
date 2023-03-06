import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';

const BuyerProfile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        toast.success('Logout Successful');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };
    const buyerName = localStorage.getItem('name');
    const buyerEmail = localStorage.getItem('email');
    return (
        <Layout>
            <PageHeader title='Buyer Profile' />
            <div className='buyer-profile mt-5'>
                <div className='container vh-100'>
                    <div className='profile-box shadow-lg rounded-4 p-5 w-50 m-auto text-center'>
                        <h2>{buyerName}</h2>
                        <h5>{buyerEmail}</h5>
                        <div className='d-flex gap-3 justify-content-center mt-5'>
                            <Link
                                className='btn btn-custom'
                                to={'/change-password'}
                            >
                                Change Password
                            </Link>
                            <button
                                className='btn btn-outline-custom'
                                onClick={handleLogout}
                            >
                                Logout Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Layout>
    );
};

export default BuyerProfile;
