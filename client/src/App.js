import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter basename='/home'>
      <div className='application'>
        <TopNav />
      </div>

      <Toaster position='top-center' />

      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
