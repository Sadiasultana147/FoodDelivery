import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddService from './Components/AddService/AddService';
import Services from './Components/Services/Services';

import LogIn from './Components/LogIn/LogIn';
import Order from './Components/Orders/Order';
import AuthProvider from './Components/Context/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrder/MyOrders';
import ManageAllorders from './Components/ManageAllOrders/ManageAllorders';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import ManageServices from './Components/ManageServices/ManageServices.js';

import NotFound from './Components/NotFound/NotFound'
import Dashboard from './Components/DashBoard/Dashboard';
import Pay from './Components/Pay/Pay';
import Review from './Components/ReView/Review';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin'

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/add">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/myorder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/allorder">
              <ManageAllorders></ManageAllorders>
            </Route>
            <Route path="/partner">
              <Partners></Partners>
            </Route>
            <PrivateRoute path="/order/:_id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <Route path="/manageservice">
              <ManageServices></ManageServices>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
