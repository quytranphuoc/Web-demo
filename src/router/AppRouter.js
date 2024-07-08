import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../features/Admin/AdminPage/Dashboard/Dashborad";
import AppMovie from "../features/Admin/AdminPage/AppMovie/AppMovie";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="admin/addmovie" element={<AddMovie />}></Route>
    </Routes>
  );
};

export default AppRouter;
