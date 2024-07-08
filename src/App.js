import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/HomePage";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import Account from "./features/User/Account";
import ProtectedRoute from "./router/ProtectedRoute";
import MoviesPage from "./Components/Pages/MoviesPage";
import Aos from "aos";
import AboutUs from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";

import SavedShows from "./features/User/Account/SavedShows";
import Password from "./features/User/Account/Password";
import SingleMovie from "./Components/Pages/SingleMovie";
import WatchMovie from "./Components/Pages/WatchMovie";
import ProtectedRouteAdmin from "./router/ProtectedRouteAdmin";
import LoginAdmin from "./Components/Pages/LoginAdmin";
import Dashboard_Admin from "./features/Admin/AdminPage/Dashboard_Admin";
import HomePageAdmin from "./Components/Pages/HomePageAdmin";
import AboutPage from "./Components/Pages/AboutPage";
import Dashboard from "./features/Admin/AdminPage/Dashboard/Dashborad";
import AddMovie from "./features/Admin/AdminPage/Dashboard/AddMovie";
import MovieList from "./features/Admin/AdminPage/Dashboard/MovieList";
import Categories from "./features/Admin/AdminPage/Dashboard/Categories";
import Users from "./features/Admin/AdminPage/Dashboard/Users";
import UpdateProfile from "./features/Admin/AdminPage/Dashboard/UpdateProfile";
import ChangePassword from "./features/Admin/AdminPage/Dashboard/ChangePassword";
import SingleMovieAdmin from "./Components/Pages/SingleMovieAdmin";
import WatchMovieAdmin from "./Components/Pages/WatchMovieAdmin";
import SideMenu from "./features/Admin/AdminPage/SideMenu";
import PageContent from "./features/Admin/AdminPage/PageContent";
function App() {
  Aos.init();
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="savedshow" element={<SavedShows />} />
          <Route path="/account" element={<Password />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
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

          <Route path="login-admin" element={<LoginAdmin />} />
          <Route
            path="/*"
            element={
              <ProtectedRouteAdmin>
                <HomePageAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="/*admin" element={<HomePageAdmin />} />
          <Route path="/*sidemenu" element={<SideMenu />} />
          <Route path="/*pagecontent" element={<PageContent />} />
          <Route path="/*movies" element={<MoviesPage />} />
          <Route path="/*single-movie" element={<SingleMovieAdmin />} />
          <Route path="/*watch-movie" element={<WatchMovieAdmin />} />
          <Route path="/*/about-us" element={<AboutPage />} />
          <Route path="/*contact-us" element={<ContactPage />} />
          <Route path="/*movie/:id" element={<SingleMovie />} />
          <Route path="/*watch/:id" element={<WatchMovie />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/movieslist" element={<MovieList />} />
          <Route path="/admin/addmovie" element={<AddMovie />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/profile" element={<UpdateProfile />} />
          <Route path="/admin/password" element={<ChangePassword />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
