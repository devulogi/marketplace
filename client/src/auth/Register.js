import { useState } from 'react';
import marketplace from '../services/marketplaceAPI';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async e => {
    e.preventDefault();
    const response = await marketplace.post('/api/register', {
      name,
      email,
      password,
    });
    console.log(response);
  };

  return (
    <form className='mt-3' onSubmit={handleFormSubmit}>
      <div className='form-group mb-3'>
        <label className='form-label'>Your Name</label>
        <input
          type='text'
          value={name}
          required
          autoFocus
          placeholder='Enter name'
          className='form-control'
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your Email</label>
        <input
          type='email'
          value={email}
          required
          placeholder='Enter Email'
          className='form-control'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your Password</label>
        <input
          type='password'
          value={password}
          required
          minLength={6}
          placeholder='Enter Password'
          className='form-control'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default function Register() {
  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-5 offset-md-3'>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
}
