import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import bgImage from './assets/Rectangle4.png';
import PromoBanner from './components/PromoBanner';
import SearchSpecial from './components/SearchSpecial';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

function App() {
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
        <NavBar />
        <HeroSection />
         <PromoBanner />
         <SearchSpecial />
         <Doctors />
         <Patients />
         <Blogs />
         <Testimonials />
         <Faq />
      </div>
    </div>
  );
}

export default App;
