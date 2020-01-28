import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import Loader from './components/Loader';

const Home = lazy( () => import('./pages/Home') );
const Dashboard = lazy( () => import('./pages/user/Dashboard') );
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy( () => import('./pages/auth/Register') );


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
