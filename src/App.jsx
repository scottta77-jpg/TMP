import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function WebflowInit() {
  const location = useLocation();
  useEffect(() => {
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      if (window.Webflow.require('ix2')) window.Webflow.require('ix2').init();
      setTimeout(() => {
        document.dispatchEvent(new Event('readystatechange'));
        window.dispatchEvent(new Event('load'));
      }, 100);
    }
  }, [location]);
  return null;
}

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home               from './pages/Home';
import About              from './pages/About';
import CaseStudies        from './pages/CaseStudies';
import CaseStudyDetail    from './pages/CaseStudyDetail';
import Contact            from './pages/Contact';
import FAQs               from './pages/FAQs';
import SustainableFeature from './pages/SustainableFeature';
import TeamMember         from './pages/TeamMember';
import PrivacyPolicy      from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy       from './pages/CookiePolicy';
import NotFound           from './pages/NotFound';

import './styles/global.css';


export default function App() {
  return (
    <BrowserRouter>
      
      <WebflowInit />
      <div className="page-wrapper">
        <Navbar />

        <main>
          <Routes>
            <Route path="/"                              element={<Home />} />
            <Route path="/about"                         element={<About />} />
            <Route path="/projects"                      element={<CaseStudies />} />
            <Route path="/projects/:slug"                element={<CaseStudyDetail />} />
            <Route path="/contact"                       element={<Contact />} />
            <Route path="/services"                      element={<FAQs />} />
            <Route path="/sustainable-features/:slug"    element={<SustainableFeature />} />
            <Route path="/team/:slug"                    element={<TeamMember />} />
            <Route path="/privacy-policy"                element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions"          element={<TermsAndConditions />} />
            <Route path="/cookies"                       element={<CookiePolicy />} />
            <Route path="*"                              element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
