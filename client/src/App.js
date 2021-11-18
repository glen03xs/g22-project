import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { SignupOrg } from "./components/auth/SignupOrg";
import { SignupCan } from "./components/auth/SignupCan";
import { Signin } from "./components/auth/Signin";
import { User } from "./components/pages/User";
import { PrivateRoute } from "./components/routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="page-wrapper">
            <Navbar />
            
            <div className="page">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/signup-org" component={SignupOrg} />
                <Route path="/signup-can" component={SignupCan} />
                <Route path="/signin" component={Signin} />
                <PrivateRoute path="/user" component={User} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
