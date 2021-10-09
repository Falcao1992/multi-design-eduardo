import React from 'react'
import './styles/index.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import LayoutManage from './Layout/LayoutManage'
import SmartHome from './Pages/SmartHome/SmartHome'
import Home from './Pages/Home/Home'

const App = () => {
	return (
		<Router>
			<Switch>
				<LayoutManage exact path='/' component={Home} />
				<LayoutManage path='/smart-home' component={SmartHome} />
			</Switch>
		</Router>
	)
}

export default App
