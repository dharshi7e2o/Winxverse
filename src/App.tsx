import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from './pages/Services';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			{/* <Home /> */}
			<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
	  <Route path="/services" element={<Services />} />
    </Routes>
			<Footer /> 
		</>
	);
}
export default App;