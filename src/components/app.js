/* eslint-disable new-cap */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import Posts from '../containers/posts';
import Post from '../containers/post';
import Create from '../containers/create';
import EditPost from '../containers/edit';
import SignIn from '../containers/signIn';
import Nav from '../containers/nav';
import RequireAuth from '../containers/requireAuth';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Meal Hacks</NavLink></li>
//         <li><NavLink to="/posts/new">New Meal</NavLink></li>
//       </ul>
//     </nav>
//   );
// };


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/new" component={RequireAuth(Create)} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route exact path="/posts/:postID/edit" component={RequireAuth(EditPost)} />
          <Route exact path="/signInUp" component={SignIn} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
