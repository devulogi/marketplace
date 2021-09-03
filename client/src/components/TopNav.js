import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-darks'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <Link to='/' className='navbar-brand'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
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
    </nav>
  );
}
