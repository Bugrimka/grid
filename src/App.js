import {Header} from "./Component/Header";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Pages} from "./Pages/Pages";

function App() {
    return (
        <Router>
            <div className="globalWrapper">
                <Header/>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/pages">
                        <Pages/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
