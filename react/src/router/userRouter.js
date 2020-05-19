import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

const UserRouter = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={props => ( <Component {...props} />)} />;
};

export default withRouter(UserRouter);
