var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var App = require('./components/app');

var browserHistory = ReactRouter.browserHistory;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var API = require('./api');
var NetworkStore = require('./stores/networks');

var routes = (
    <Route component={require('./components/App')}>
        <Route name='home' path='/' component={require('./components/Home')} />
    </Route>
);

API.fetchNetworks();

// ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root){
    // React.render(<Root />, document.getElementById('app'));
// });

ReactDOM.render(
    (
        <Router history={browserHistory}>
            {routes}
        </Router>
    )
    , document.getElementById('app')
);
