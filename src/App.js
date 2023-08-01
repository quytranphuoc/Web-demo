import { Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/HomePage";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import Footer from "./Components/layout/Footer";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
