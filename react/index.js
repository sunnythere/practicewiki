//addpage - includes form for author name/email, page title, page content, page status

//error
	/* <h1>{{message}}</h1>
  <h2>{{error.status}}</h2>
  <pre>{{error.stack}}</pre>*/

//index
	//list of pages

//layout (general template)
	//

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import store from './store';

import Main from './components/Main';
import Addpage from './components/Addpage';
import Pagelist from './components/Pagelist';

//onEnter Pagelist, load all articles

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Router path='/' component={Main}>
				<Route path='list' component={Pagelist} />
				<Route path='add' component={Addpage} />
			</Router>
		</Router>
	</Provider>,
	document.getElementById('app')
)

