import React from "react";
import Login from './pages/Login';
import logo from './logo/reachme_logo.png';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Jumbotron, Container } from 'react-bootstrap';
import "./App.css";
import SignupModal from './components/Modal';
import NoMatch from './pages/NoMatch';
import Homepage from './pages/Homepage';

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setModalShow(true);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <img src={logo} alt="logo" />
            <Container style={{ width: "35%" }}>
              <Jumbotron>
                <Login handleOnClick={handleOnClick} />
                <SignupModal
                  show={modalShow}
                  onHide={() => setModalShow(false)} />
              </Jumbotron>
            </Container>
          </Route>
          <Route exact path={["/home","/"]}>
            <Homepage />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;