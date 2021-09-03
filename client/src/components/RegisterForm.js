import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

import marketplace from '../services/marketplaceAPI';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (name === '') {
      toast.error('Name is required.');
      return;
    }
    if (email === '') {
      toast.error('Email is required.');
      return;
    }
    if (password === '') {
      toast.error('Password is required.');
      return;
    }

    try {
      const response = await marketplace.post('/api/register', {
        name,
        email,
        password,
      });

      toast.success(response.data.hint);

      setName('');
      setEmail('');
      setPassword('');

      history.push('/login');
    } catch (error) {
      toast.error(error.response.data.hint);
    }
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
