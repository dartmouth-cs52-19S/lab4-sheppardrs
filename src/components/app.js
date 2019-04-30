import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import Posts from '../containers/posts';
import Post from '../containers/post';
import Create from '../containers/create';
import EditPost from '../containers/edit';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Meal Hacks</NavLink></li>
        <li><NavLink to="/posts/new">New Meal</NavLink></li>
      </ul>
    </nav>
  );
};


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/new" component={Create} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route exact path="/posts/:postID/edit" component={EditPost} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
