import { Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/HomePage";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import Footer from "./Components/layout/Footer";
import Account from "./features/User/Account";
import ProtectedRoute from "./router/ProtectedRoute";
import Aos from "aos";

function App() {
  Aos.init();
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
