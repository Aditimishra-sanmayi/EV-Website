import Dropdown from '../Dropdown/Dropdown'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">EV-Website</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
        <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/explore">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Explore
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </header>
    // <div className='nav mb-10'>

    //   <div className="nav-logo">EV-website</div>
    //   <section className="nav-menu">
      
        /* <option>Home</option>
        <option>Explore</option>
        <option>About</option>

         <Dropdown/> */
         
      // </section>
       
  );
  } 

export default Navbar;