import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Servicespage from './pages/Servicespage';
import Contactpage from './pages/Contactpage';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceDetails from './pages/ServiceDetails';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faqs from './pages/Faqs';
import ChangePassword from './pages/ChangePassword';
import BuyerProfile from './pages/BuyerProfile';
import PageNotFound from './pages/PageNotFound';

function App() {
    const token = localStorage.getItem('token');
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/about' element={<Aboutpage />} />
                    <Route path='/services' element={<Servicespage />} />
                    <Route path='/contact' element={<Contactpage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route
                        path='/buyer-profile'
                        element={
                            token ? (
                                <BuyerProfile />
                            ) : (
                                <Navigate to={'/login'} />
                            )
                        }
                    />
                    <Route
                        path='/change-password'
                        element={
                            token ? (
                                <ChangePassword />
                            ) : (
                                <Navigate to={'/login'} />
                            )
                        }
                    />
                    <Route
                        path='/terms-and-conditions'
                        element={<TermsAndConditions />}
                    />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/faqs' element={<Faqs />} />
                    <Route
                        path='/single-service/'
                        element={<ServiceDetails />}
                    />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
