import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext"
import Alert from "./components/alert/Alert";

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Alert />
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          {user && (
            <>
              <Route path="/">
                <Home />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
