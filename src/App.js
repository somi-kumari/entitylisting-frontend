import logo from "./logo.svg";
import "./App.css";
import { ProductPage } from "./components/ProductPage";
import { FilterSort } from "./components/FilterSort";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FilterSort />
      <ProductPage />
      {/* <Routes>
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
