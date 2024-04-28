import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/logo.webp';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand- navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="# ">
            <img src={Logo} alt="" style={{
                width : '50px'
            }}/>
          </Link>
          <button className="btn"
          style={{
            color : '#fff'
          }} type="button" 
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
           aria-controls="offcanvasRight">
            <i className="fa-solid fa-bars fa-2x"></i>
           </button>

            <div className="offcanvas offcanvas-end"
             tabindex="-1" id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close bg-light" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close">
              
                </button>
            </div>
            
              <div className="offcanvas-body text-light">
                <ul>
                  <Link to="/" href=" "><li className='mb-4 text-light fs-4'>Home <i class="fa-solid fa-house"></i></li></Link>
                  <Link to="/about" href=" "><li className='mb-4 text-light fs-4'>About To Website <i class="fa-brands fa-dropbox"></i></li></Link>
                  <Link to="/contact" href=" "><li className='mb-4 text-light fs-4'>Contact Me <i class="fa-solid fa-phone"></i></li></Link>
                </ul>
              </div>
            </div>
            </div>
            </nav>
    </>
  );
}

export default Navbar;