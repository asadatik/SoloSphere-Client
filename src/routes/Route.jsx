
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'



const Route = () => {
    return (
        
              <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
        
    );
};

export default Route;