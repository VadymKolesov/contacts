import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Registration = lazy(() =>
  import("../../pages/Registration/Registration")
);
const Login = lazy(() => import("../../pages/Login/Login"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

function App() {
  return (
    <>
      <Layout />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
