import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Header from './common/header';
import SidePanel from './common/SidePanel';
import Dashboard from './pages/dashboard';
import Help from './pages/help';
import MyCruise from './pages/myCruise';
import Agent from './pages/agent';
import store from './store';
import './style.scss'

class App extends Component {
  constructor(){
    super();
    this.state={
      pathName : window.location.pathname
    }
  }
  render() {
    return (
    	<Provider store={store}>
      	<HashRouter>
      		<div className="page">
            <Header />
            <div className="main">
              <SidePanel pathName={this.state.pathName}/>
              <div className="main-panel">
                <Switch>
                  <Route path='/dashboard' exact component={Dashboard}></Route>
                  <Route path='/agent' exact component={Agent}></Route>
                  <Route path='/myCruise' exact component={MyCruise}></Route>
                  <Route path='/help' exact component={Help}></Route>
                  <Redirect path="/" exact to='/agent' />
                </Switch>
              </div>              
            </div>
      			{/* <Footer /> */}
      		</div>
      	</HashRouter>
      </Provider>
    );
  }
}

export default App;
