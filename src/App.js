import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "./pages/NewBadge/NewBadge"
import Login from "./pages/Accounts/Login"
import Signin from "./pages/Accounts/Signin"
import Select from "./pages/Main/Selection"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/select" component={Select}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Signin" component={Signin}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;