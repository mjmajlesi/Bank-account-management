import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeMain from "./Components/main/HomeMain";
import Home from "./Components/AccountPage/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<HomeMain />} path="/" />
        <Route element={<Home />} path="/account" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
