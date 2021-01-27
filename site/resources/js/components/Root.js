import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Error404 from "./errors/error404";
import NavMain from "./navigation/navMain";
import HomeIndex from "./home/homeIndex";
import PageIndex from "./pages/pageIndex";
import PostIndex from "./posts/postIndex";
import EntityIndex from "./entities/entityIndex";

function Root() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        <Router>
                            <NavMain></NavMain>
                            <Switch>
                                <Route exact path="/" component={HomeIndex}></Route>
                                <Route path="/:slug/page/:id" component={PageIndex}></Route>
                                <Route path="/posts" component={PostIndex}></Route>
                                <Route path="/entities" component={EntityIndex}></Route>

                                <Route component={Error404}></Route>
                            </Switch>
                        </Router>




                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root />, document.getElementById('app'));
}
