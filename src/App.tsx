import {Route , Routes} from "react-router-dom"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
function App() {
  return (
      <>
      <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </>
  )
}

export default App;
