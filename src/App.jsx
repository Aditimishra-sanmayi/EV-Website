
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Explore from "./Components/Explore/Explore";
import Login from "./Components/Login/Login";

const App = () => {
  
  return (
    
    
    <BrowserRouter>
    <Navbar/>
    <Login/>
    
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/explore" element={<Explore/>} />

    </Routes>
    </BrowserRouter>
    
  );
}
export default App;