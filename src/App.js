import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import MultiStep from "./pages/multiStep";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {" "}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/editUser/:id" element={<EditUser />} />
            <Route path="/multiInfo" element={<MultiStep />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
