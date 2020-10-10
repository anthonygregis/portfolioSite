import React from 'react';
import './App.css';

// react-router-dom Imports
import {
	Switch,
	Route
} from "react-router-dom"

// Component / Pages Imports
import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
    </div>
  );
}

export default App;
