import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Home
        </Link>
        <div className='d-flex justify-content-between align-items-center'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse w-50'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='navbar-item'>
                <Link to='/signin' className='nav-link'>
                  Sign in
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/register' className='nav-link'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
