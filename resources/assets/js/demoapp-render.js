import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './modules/App';
import HomeBody from './modules/HomeBody';
import AboutBody from './modules/AboutBody';
import ContactBody from './modules/ContactBody';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeBody} />
            <Route path="/about" component={AboutBody}/>
            <Route path="/contact" component={ContactBody}/>
        </Route>
    </Router>
), document.getElementById('content'));