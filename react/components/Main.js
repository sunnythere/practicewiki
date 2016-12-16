import React from 'react';

import Navbar from './Navbar';


export default class Main extends React.Component {

constructor(props) {
	super(props);
}

render() {
	return (
	  <div id="layout">
		<div id="navbar_div">
			<Navbar />
		</div>
		<div>
			{
				this.props.children && React.cloneElement(this.props.children, this.props)
			}
		</div>
	  </div>
	 )
	}

}

