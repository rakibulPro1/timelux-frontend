import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Footer from "./pages/Home/Footer/Footer";
import PrivateRoute from "../src/pages/Login/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Home/Products/Products";
import Purchage from "./pages/Home/Purchage/Purchage";
import Login from "./pages/Login/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Login/Register/Register";
import Menubar from "./pages/Home/Menubar/Menubar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/explore">
            <Menubar></Menubar>
            <Products></Products>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/purchage/:id">
            <Menubar></Menubar>
            <Purchage></Purchage>
            <Footer></Footer>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
