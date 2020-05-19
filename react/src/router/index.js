import React from 'react';
import {Route, HashRouter, Switch } from 'react-router-dom';
import Layout from '@/view/layout/index';
import Login from '@/view/login/login';

//import UserRouter from './userRouter';


const Router = () => {
	return (
		<HashRouter>
			<Switch>
                <Route component={Login} exact path="/login" />
               {/* <UserRouter path="/" component={Layout} />*/}
				<Route component={Layout}/>
			</Switch>
		</HashRouter>
	);
};

export default Router;
