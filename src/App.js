import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home'
import MachinesContainer from './components/Machines/MachinesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App () {
	return (
		<div className='App'>
				<header className='App-header'>
					<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
				</header>

				<nav className='App-nav'>
					<Link to='/'> Home </Link>
					<Link to='/machines'> Machines </Link>
				</nav>

				<Switch>
					<Route exact path='/' render={ () =><Home />}/>
					<Route exact path='/machines' render={ () => <MachinesContainer />} />
					<Route path='/machines/:machineId?' render={ () => <ProfileContainer />}/>
				</Switch>
		</div>
	);
}

export default App;
