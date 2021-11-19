import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Explore from './pages/Explore/Explore/Explore';
import NotFound from './pages/Home/NotFound/NotFound';
import Orders from './pages/Explore/Orders/Orders';
import Header from './pages/Home/Header/Header';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashbord/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header/>
       <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <PrivateRoute path="/explore">
             <Explore></Explore>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
             <Dashboard/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route  path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
