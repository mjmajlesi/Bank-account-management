import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeMain from "./Components/main/HomeMain";
import Home from "./Components/AccountPage/Home";
import { AccountContextProvider } from "./Components/AccountPage/AccountContext";
function App() {
  return (
    <AccountContextProvider>
      <Navbar />
      <Routes>
        <Route element={<HomeMain />} path="/" />
        <Route element={<Home />} path="/account" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Footer />
    </AccountContextProvider>
  );
}

export default App;
