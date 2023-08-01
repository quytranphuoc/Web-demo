import { Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Banner from "./Components/layout/HomePage/Banner";

 

function App() {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Banner/>
    
    </>
  );
}

export default App;
