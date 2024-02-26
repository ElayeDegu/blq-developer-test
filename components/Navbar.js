import Styles from './Navbar.module.css';
import { MenuIcon, SearchIcon  } from '@heroicons/react/outline';

const Navbar = () => {
    return (
    <nav className={Styles.nav}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={Styles.logo}>Testvalley</div>
        <div className={Styles.navNew}>
           <MenuIcon className={Styles.menuIcon} />
          <span className="text-green">Category</span>
         </div>
        <div className="flex border px-2 w-80 h-6 space-x-4">
            <SearchIcon className="h-4 w-4 text-grey mr-2 mt-2" />
            <input
                type="text"
                placeholder="If you're wondring whether to buy it or not"
                className={Styles.navInput}
         />
       </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">|</a>
          <a href="#" className="hover:text-gray-300">Login / Sign Up</a>
        </div>
      </div>
    </nav>

    );
  };
  
  export default Navbar;
  
  