import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      <Link to='/signin' className='nav-link'>
        Sign in
      </Link>
      <Link to='/register' className='nav-link'>
        Register
      </Link>
    </div>
  );
}
