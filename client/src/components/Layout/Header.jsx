import { Link } from 'react-router-dom';
import logoDark from './../../assets/logoDark.png';

const Header = () => {
    return (
        <>
            <div id='back-to-top'></div>
            <header className='header-area fixed-top w-100'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container'>
                        <Link className='navbar-brand logo' to={'/'}>
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
                                <li className='nav-item'>
                                    <Link
                                        className='btn btn-custom'
                                        to={'/register'}
                                    >
                                        Join Now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
