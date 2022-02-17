import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "components/app/GlobalStyle";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Login = lazy(() => import("pages/Login"));
  const Manage = lazy(() => import("pages/Manage"));
  const Regist = lazy(() => import("pages/Regist"));

  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/regist" element={<Regist />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
