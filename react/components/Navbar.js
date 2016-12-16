import React from 'react';
import {Link} from 'react-router';

//links:

export default (props) => {

	return(
		<div>
			<div id="wiki">
				<h2>Wiki</h2>
			</div>
			<div id="menu">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/add">Add Page</Link></li>
					<li><Link to="/list">Page List</Link></li>
				</ul>
			</div>
		</div>
	)
}
