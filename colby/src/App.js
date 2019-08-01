import React from 'react';
import './App.css';
import About from "./About";
import Store from "./Store";
import Home from "./Home";
import Panda from "./Panda";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router> {/*Everything in between this tag will be routable!*/}
<Nav />
{/*<Switch>*/}{/*switch allows for a single component with to be.... switched. */}
<Route path="/(panda|pandas|pancakes)" exact component={Panda} /> {/*this allows for multiple url paths to render the same component*/}
<Route path="/about" component={About}/>
<Route path="/store" component={Store} />
<Route path="/" component={Home} />{/* the path "/" is great for home, but try going to "/store" - why is home still appearing? Try adding the word "exact" inside of the element, like: <Route path="/" exact component={Home} /> and try to render again.*/}
{/*</Switch>*/}
</Router>
    </div>
  );
}

export default App;
