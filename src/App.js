import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import {
  BackToTop,
  Login,
  Register,
  Dashboard,
  Community,
  UserProfile,
  TeamProfile,
  NotFoundPage,
  RegistrationSuccess,
  UpdateProfile,
  ChangePassword,
  ChangePasswordDone,
  PasswordReset,
  PasswordResetDone,
  PasswordResetConfirm,
  PasswordResetComplete,
  ResendLink,
  VerificationPage,
  TeamMembers,
  Teams as TeamsList,
  Users,
} from "./pages";
import Header from "./components/Header/Header";
import CommunityContainer from "./pages/CommunityContainer/CommunityContainer";
import Teams from "./components/Teams/Teams";
import FriendsList from "./components/FriendsList/FriendsList";
import SocialMediaForm from "./pages/SocialMediaForm/SocialMediaForm";
import Invitations from "./components/Invitations/Invitations";
import "./App.css";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import TeamLists from "./pages/TeamLists/TeamLists";

function Navbar() {
  let location = useLocation();
  if (location.pathname === "/404") {
    return null;
  }

  return (
    <div>
      <Header />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route exact path="/update-profile" element={<UpdateProfile />} />
            <Route path="community" element={<CommunityContainer />}>
              <Route path="" element={<Community />} />
              <Route path="search" element={<Community />} />
              <Route path="friends" element={<FriendsList />} />
              <Route path="invitations" element={<Invitations />} />
              <Route path="teams" element={<Teams />} />
            </Route>
            <Route exact path="/community/users/:id" element={<UserProfile />} />
            <Route path="/community/teamlists" element={<TeamLists />} />
            <Route exact path="/community/teams/:teamname" element={<TeamProfile />} />
            <Route exact path="/community/teams/:teamname/members" element={<TeamMembers />} />
          </Route>
          {/* Admin Access Routes */}
          <Route path="admin" element={<ProtectedRoutes />}>
            <Route path="teams" element={<TeamsList />} />
            <Route path="users" element={<Users />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          {/* Other Routes */}
          <Route path="/register" element={<Register />} exact />
          <Route exact path="/auth/register" element={<SocialMediaForm />} />
          <Route exact path="/register-success" element={<RegistrationSuccess />} />
          <Route exact path={`/verify/:token`} element={<VerificationPage />} />
          <Route exact path="/password_change" element={<ChangePassword />} />
          <Route exact path="/password_change/done" element={<ChangePasswordDone />} />
          <Route exact path="/password_reset" element={<PasswordReset />} />
          <Route exact path="/resend_link" element={<ResendLink />} />
          <Route exact path="/password_reset/done" element={<PasswordResetDone />} />
          <Route exact path="/resetPassword/:token" element={<PasswordResetConfirm />} />
          <Route exact path="/reset/done" element={<PasswordResetComplete />} />
          <Route path="/unauthorized" element={<Unauthorized />} exact />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/404" element={<NotFoundPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
