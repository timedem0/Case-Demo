import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigator extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/">Categories</Link>
					-
					<Link to="/categories_expensive">Expensive Categories</Link>
				</nav>
			</div>
		);
	}
}

export default Navigator;