import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import ServicesPage from './components/Pages/ServicesPage';
import Layout from './components/Layout';
import ProductDevelopment from './components/Pages/ProductDevelopment';
import ApplicationModernistaion from './components/Pages/ApplicationDevelopment';
import WebsiteDevelopment from './components/Pages/WebsiteDevelopment';
import MobileAppDevelopment from './components/Pages/MobileAppDevelopment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-service" element={<ServicesPage />} />
          <Route path="/service/product-development" element={<ProductDevelopment />} />
          <Route path="/service/application-development" element={<ApplicationModernistaion />} />
          <Route path="/service/website-development" element={<WebsiteDevelopment />} />
          <Route path="/service/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route
            path="/start-your-project"
            element={<ContactPage/>}
          />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
