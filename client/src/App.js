import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin';
import AdmNavbar from './Components/AdmNavbar/Navbar';
import AdmFooter from './Components/AdmFooter/Footer';
import { AuthProvider } from './Components/AuthContext/AuthContext';

function Main() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/adminPanel');

  return (
    <div>
      {isAdminRoute ? <AdmNavbar /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Anti UV Curtains' element={<ShopCategory category="Anti UV Curtains" />} />
        <Route path='/Thick Curtains' element={<ShopCategory category="Thick Curtains" />} />
        <Route path='/Window Blinds' element={<ShopCategory category="Window Blinds" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path="/adminPanel/*" element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
      {isAdminRoute ? <AdmFooter /> : <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;