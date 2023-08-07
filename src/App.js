import { Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/HomePage";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import Footer from "./Components/layout/Footer";
import Account from "./features/User/Account";
import ProtectedRoute from "./router/ProtectedRoute";
import MoviesPage from "./Components/Pages/MoviesPage";
import Aos from "aos";
import AboutUs from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import DrawerContent from "./features/Auth/DrawerContent";
import SavedShows from "./features/User/Account/SavedShows";
import Password from "./features/User/Account/Password";
import SingleMovie from "./Components/Pages/SingleMovie";
import WatchMovie from "./Components/Pages/WatchMovie";
function App() {
  Aos.init();
  return (
    <>
      <AuthContextProvider>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="savedshow" element={<SavedShows />} />
            <Route path="/password" element={<Password />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/watch/:id" element={<WatchMovie/>}/>
            {/* <Route path="/movieslist" element={<></>}/> */}
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
          <Footer />
        </>
      </AuthContextProvider>
    </>
  );
}

export default App;
