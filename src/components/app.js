import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import Posts from '../containers/posts';
import Post from '../containers/post';

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//   return (
//     <div>
//       Welcome
//       <Counter />
//       <Controls />
//     </div>
//   );
// };
// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/posts/new">Add</NavLink></li>
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
          <Route exact path="/posts/:postID" component={Post} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
