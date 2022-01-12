import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Manage from "../pages/Manage";
import Regist from "../pages/Regist";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
