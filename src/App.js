import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;