import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "components/app/GlobalStyle";
import Auth from "components/AuthHoc";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Login = lazy(() => import("pages/Login"));
  const Manage = lazy(() => import("pages/Manage"));
  const Regist = lazy(() => import("pages/Regist"));

  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={Auth(Home, true)} />
            <Route path="/manage" element={Auth(Manage, true)} />
            <Route path="/login" element={Auth(Login, false)} />
            <Route path="/regist" element={Auth(Regist, false)} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
