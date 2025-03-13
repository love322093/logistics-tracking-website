import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TrackingResult from './pages/TrackingResult';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/main.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tracking" component={TrackingResult} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;