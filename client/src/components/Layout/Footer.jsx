import { Link } from 'react-router-dom';
import logoLight from './../../assets/logoLight.png';
const Footer = () => {
    return (
        <footer className='footer-area bg-dark'>
            <div className='footer-top py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 pe-5'>
                            <Link className='footer-widget logo' to={'/'}>
                                <img src={logoLight} alt='' />
                            </Link>
                            <p className='pt-2 text-white-50'>
                                olor sit amet consectetur adipiscing elit massa
                                non torquent turpis ultricies augue varius
                                montes interdum, vulputate fames facilisis velit
                                pharetra habitasse.
                            </p>
                        </div>
                        {/* <div className='col-md-1'></div> */}
                        <div className='col-md-3'>
                            <div className='footer-widget'>
                                <h6 className='text-light'>Quick Links</h6>
                                <ul className='footer-nav'>
                                    <li>
                                        <Link to={'/terms-and-conditions'}>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacy-policy'}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/faqs'}>FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='footer-widget'>
                                <h6 className='text-light'>Business</h6>
                                <ul className='footer-nav'>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='footer-widget'>
                                <h6 className='text-light'>Support</h6>
                                <ul className='footer-nav'>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='/'>About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='backtotop'>
                <a href='#back-to-top' className=''>
                    <i className='bi bi-arrow-up-circle'></i>
                </a>
            </div>

            <div className='footer-bottom bg-black py-3'>
                <div className='container'>
                    <p className='pt-2 text-center text-secondary'>
                        &copy; All rights reserved by helper
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
