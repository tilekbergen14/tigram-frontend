import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home/" component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
