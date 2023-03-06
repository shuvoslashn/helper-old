import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
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
                    <Route path='/buyer-profile' element={<BuyerProfile />} />
                    <Route
                        path='/change-password'
                        element={<ChangePassword />}
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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
