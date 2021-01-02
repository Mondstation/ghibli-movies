import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Recommendations from "./Recommendations";

function PageRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:title" component={SingleMovie} />
      <Route exact path="/recommendations" component={Recommendations} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default PageRoutes;
