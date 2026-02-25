import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { PropertyProvider, useProperty } from './context/PropertyContext';
import { isValidPropertyId } from './services/propertyLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertySelector from './pages/PropertySelector';
import Home from './pages/Home';
import FloorPlans from './pages/FloorPlans';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Contact from './pages/Contact';
import './index.css';

/**
 * PropertyWrapper component that loads property data based on URL parameter
 */
function PropertyWrapper() {
  const { propertyId: urlPropertyId } = useParams<{ propertyId: string }>();
  const { propertyId, propertyData, loadProperty, isLoading, error } = useProperty();

  // Load property when URL propertyId changes
  useEffect(() => {
    if (urlPropertyId && isValidPropertyId(urlPropertyId)) {
      loadProperty(urlPropertyId);
    }
  }, [urlPropertyId, loadProperty]);

  if (isLoading || !propertyId || !propertyData) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl font-semibold">Loading property...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 text-xl font-semibold">Error: {error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Property selector at root */}
      <Route path="/" element={<PropertySelector />} />
      {/* Property-specific routes */}
      <Route path="/:propertyId/*" element={<PropertyWrapper />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <PropertyProvider defaultProperty="mesa-falls">
        <AppRoutes />
      </PropertyProvider>
    </Router>
  );
}

export default App;
