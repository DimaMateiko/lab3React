import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Navigation from "./components/Navigation";
import FooterNavigation from "./components/FooterNavigation";
import 'font-awesome/css/font-awesome.min.css';
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

function App() {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/first" element={<FirstPage/>} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
      </Routes>
    <FooterNavigation/>
    
    </>
  );
}

export default App;
