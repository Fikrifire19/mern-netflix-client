import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" /> }
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies"/>
            </Route>
            <Route path="/series">
              <Home type="series"/>
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
