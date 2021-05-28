import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "./pages/NewBadge/NewBadge"
import Login from "./pages/Accounts/Login"
import Signin from "./pages/Accounts/Signin"
import Select from "./pages/Main/Selection"
import error from "./pages/Error_404/Error"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/main" component={Main}></Route>
          <Route exact path="/select" component={Select}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/log_in" component={Login}></Route>
          <Route exact path="/sign_in" component={Signin}></Route>
          <Route exact path="/" component={error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;