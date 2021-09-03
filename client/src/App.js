import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';

export default function App() {
  return (
    <Router>
      <TopNav />
      <Toaster position='top-right' reverseOrder={false} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  );
}
