import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/Main/Main"
import NewBadge from "./pages/NewBadge/NewBadge"
import LogIn from "./pages/Accounts/LogIn"
import SignUp from "./pages/Accounts/SignUp"
import Select from "./pages/Main/Selection"
import error from "./pages/Error_404/Error"
import Badges from "./pages/Badges/Badges"
import BadgeDetails from './components/BadgeDetails'
import EditBadge from "./pages/EditBadge/EditBadge"
import NotFound from "./pages/Error_404/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/select" component={Select}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/log_in" component={LogIn}></Route>
          <Route exact path="/sign_up" component={SignUp}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/:badgeId" component={BadgeDetails}></Route>
          <Route exact path="/:badgeId/edit" component={EditBadge}></Route>
          <Route component={error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;