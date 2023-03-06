import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import notfound from './../assets/notfound.svg';

const PageNotFound = () => {
    return (
        <>
            <Layout>
                <div className='py-5 my-5 text-center'>
                    <img src={notfound} alt='404' width={500} />
                    <h1>Page not found</h1>
                    <h5>Please go back to home</h5>
                    <Link to={'/'} className='btn btn-custom mt-4'>
                        Home Page
                    </Link>
                </div>
            </Layout>
        </>
    );
};

export default PageNotFound;
