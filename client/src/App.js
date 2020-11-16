import React, { useState } from "react";
import Login from './pages/Login';
import logo from './logo/reachme_logo.png';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { Jumbotron, Container } from 'react-bootstrap';
import "./App.css";
import SignupModal from './components/Modal';
import NoMatch from './pages/NoMatch';
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import AddPost from './pages/AddPost';
import Users from './pages/Users';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setModalShow(true);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
        <Redirect to="/login" />
          <Route exact path="/login">
            <Container style={{ width: "35%" }}>
                  <img src={logo} alt="logo"/>
                  <Jumbotron style={{backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",}}>
                    <Login handleOnClick={handleOnClick} />
                    <SignupModal
                      show={modalShow}
                      onHide={() => setModalShow(false)} />
                  </Jumbotron>
            </Container>
          </Route>
          <Route exact path={["/home", "/"]}>
            <Homepage />
          </Route>
          <Route exact path="/profile/:user_id" children={<ProfilePage />}>
            <ProfilePage />
          </Route>
          <Route exact path="/addPost">
            <AddPost />
          </Route>
          <Route exact path="/friends">
            <Users />
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