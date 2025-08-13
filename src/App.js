import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import bgImage from './assets/Rectangle4.png';
import RootLayout from './Layout/RootLayout';
import HeroSection from './components/HeroSection';
import Bookings from './components/Bookings';
import FindDoctors from './components/FindDoctors';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Home */}
        <Route index element={<HeroSection />} />
        {/* Other pages */}
        <Route path="my-bookings" element={<Bookings />} />
        <Route path="find-doctors" element={<FindDoctors />} />
      </Route>
    )
  );

  return (
    <div
      className="appBg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="contents">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
