import RegistrationForm from '../components/RegisterForm';

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
