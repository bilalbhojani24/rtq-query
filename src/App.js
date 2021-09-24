import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from "./components/post/Create";
import Posts from "./components/post/Posts";
import SinglePost from "./components/post/SinglePost";
import UpdatePost from "./components/post/Update";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/post/:id">
          <SinglePost />
        </Route>
        <Route path="/create">
          <CreatePost />
        </Route>
        <Route path="/update">
          <UpdatePost />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
