// import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'

//function App() {

 // return (
   //<BrowserRouter>
     // <Routes>
       // <Route path="/" element={<Layout />}>
        //</Route>
      //</Routes>
    //</BrowserRouter>
  //)
//}


import { useState,  useEffect } from 'react';
import LoginModal from './Component/LoginModal';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import SearchSection from './Component/SearchSection';
import FeaturedMerchants from './Component/FeaturedMerchants';
import HowItWorks from './Component/HowItWorks';
import Testimonials from './Component/Testimonials';
import CTASection from './Component/CTASection';
import Footer from './Component/Footer';
import CategoriesSection from './Component/CategoriesSection'
import RegisterModal from './Component/RegisterModal';


function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setLoginOpen(true);
    window.addEventListener('open-login', openHandler);
    return () => window.removeEventListener('open-login', openHandler);
  }, []);

  useEffect(() => {
    const openHandler = () => setRegisterOpen(true);
    window.addEventListener('open-register', openHandler);
    return () => window.removeEventListener('open-register', openHandler);
  }, []);

  

  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedMerchants />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
        <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default App