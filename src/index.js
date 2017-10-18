import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap/bootstrap-grid.min.css';
import './assets/bootstrap/bootstrap.min.css';
import Home from './containers/Home';
import AddClothes from './containers/AddClothes';
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/add" component={AddClothes}/>
			</div>
		</Router>
	)
}


ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
