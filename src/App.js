import { Route, Routes } from 'react-router-dom';
import NewArrivals from './components/Pages/newarrivals/NewArrivals';
import './App.css';
import Home from './components/Pages/home/Home';
import About from './components/Pages/about/About';
import Trackmyorder from './components/Pages/track_order/Trackmyorder';
import Contact from './components/Pages/Contact/Contact.jsx';
import Account from './components/Pages/Account/Account';
import FAQ from './components/header/FAQ/FAQ';
import Needhelp from './components/Pages/need_help/Needhelp';
// import Cart from './components/Pages/Add_to_cart/Cart';
import Login from './components/Pages/Account/Login';
import Register from './components/Pages/Account/register/Register';
import ForgotPassword from './components/Pages/Account/ForgotPassword';
import CategoryPage from './components/Pages/allcategories/CategoryPage';
import JewelryPage from './components/Allproducts/Jewelry/JewelryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Trackmyorder" element={<Trackmyorder />} />
      <Route path='/NewArrivals' element={<NewArrivals />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Needhelp" element={<Needhelp />} />
      {/* <Route path="/Cart" element={<Cart />} /> */}
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Account" element={<Account />} />
      {/* Add routes for category pages */}
      <Route path="/CategoryPage/:categoryName" element={<CategoryPage />} />
      <Route path="/jewelry" element={<JewelryPage />} /> {/* Jewelry Page */}

      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
