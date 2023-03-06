import { Link, useNavigate } from 'react-router-dom';
import logoDark from './../../assets/logoDark.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('name');
    const handleLogout = () => {
        toast.success('Logout Successful');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };
    return (
        <>
            <div id='back-to-top'></div>
            <header className='header-area fixed-top w-100'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container'>
                        <Link
                            className='navbar-brand logo'
                            to={'http://localhost:5173/#back-to-top'}
                        >
                            <img src={logoDark} alt='' />
                        </Link>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <i className='bi bi-grid' />
                        </button>
                        <div
                            className='collapse navbar-collapse'
                            id='navbarSupportedContent'
                        >
                            <ul className='navbar-nav ms-auto mb-2 gap-2 mb-lg-0 d-flex align-items-center'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/about'}>
                                        About Us
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/services'}>
                                        Services
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/contact'}>
                                        Contact Us
                                    </Link>
                                </li>

                                {userName ? (
                                    <li className='nav-item dropdown'>
                                        <a
                                            className='nav-link dropdown-toggle'
                                            href='#'
                                            role='button'
                                            data-bs-toggle='dropdown'
                                            aria-expanded='false'
                                        >
                                            Hi, {userName}
                                        </a>
                                        <ul className='dropdown-menu'>
                                            <li>
                                                <Link
                                                    className='dropdown-item'
                                                    to={'/buyer-profile'}
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className='dropdown-item'
                                                    to={'/change-password'}
                                                >
                                                    Change Password
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    className='btn btn-custom dropdown-item'
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                ) : (
                                    <li className='nav-item'>
                                        <Link
                                            className='btn btn-custom'
                                            to={'/register'}
                                        >
                                            Join Now
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
