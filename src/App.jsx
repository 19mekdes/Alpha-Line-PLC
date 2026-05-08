import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/Services';
import TestimonialsPage from './Pages/Testimonials';
import ContactPage from './Pages/Contact';

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Page Transition Component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// 404 Not Found Component
const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Page Not Found
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-8 max-w-md mx-auto"
          >
            Sorry, the page you are looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

// Loading Component (Optional - for route-based code splitting)
// eslint-disable-next-line no-unused-vars
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/service" 
                element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/testimonial" 
                element={
                  <PageTransition>
                    <TestimonialsPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                } 
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;