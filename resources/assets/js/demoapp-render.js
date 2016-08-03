import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';

import App from './modules/App';
import HomeBody from './modules/HomeBody';
import AboutBody from './modules/AboutBody';
import ContactBody from './modules/ContactBody';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeBody} />
            <Route path="/about" component={AboutBody}/>
            <Route path="/contact" component={ContactBody}/>
        </Route>
    </Router>
), document.getElementById('content'));