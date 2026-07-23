import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
import ProjectsPage from "./Pages/Projects";
import PartnersPage from "./Pages/Partners";

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

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
const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="text-9xl font-bold text-safety-orange mb-4">
              404
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Page Not Found
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
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
              className="inline-flex items-center px-6 py-3 bg-safety-orange hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

// eslint-disable-next-line no-unused-vars
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-safety-orange/20 rounded-full animate-spin border-t-safety-orange" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-safety-orange rounded-full animate-pulse" />
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
                path="/services"
                element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <ProjectsPage />
                  </PageTransition>
                }
              />
              <Route
                path="/partners"
                element={
                  <PageTransition>
                    <PartnersPage />
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
