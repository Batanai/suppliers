import "./App.css";
import SupplierList from "./supplierList/SupplierList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import SupplierInput from "./supplierInput/SupplierInput";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/add">
            <SupplierInput />
          </Route>
          <Route path="/">
            <SupplierList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
