import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LoginPage from './account/LoginPage';


export default function Template() {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route path="/account/login" component={LoginPage} />
        </section>
      </div>
    </Router>
  );
}
