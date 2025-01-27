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
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route element={<HomeMain />} path="/" />
        <Route element={<Home />} path="/account" />
        <Route element={<Login />} path="/login" />
      </Routes>
      </main>
      <Footer />
      </div>
    </AccountContextProvider>
  );
}

export default App;
