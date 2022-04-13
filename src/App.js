import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import {
  Header,
  Footer,
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
} from "./components/pages";
import "./App.css";

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
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route exact path="/update-profile" element={<UpdateProfile />} />
          </Route>
          {/* Public Routes */}
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          {/* Other Routes */}
          <Route exact path="/community/profileid" element={<UserProfile />} />
          <Route exact path="/community/profileidt" element={<TeamProfile />} />
          <Route path="/register" element={<Register />} exact />
          <Route exact path="/community" element={<Community />} />
          {/* prettier-ignore */}
          <Route exact path="/register-success" element={<RegistrationSuccess />} />
          <Route exact path={`/verify/:token`} element={<VerificationPage />} />
          <Route exact path="/password_change" element={<ChangePassword />} />
          {/* prettier-ignore */}
          <Route exact path="/password_change/done" element={<ChangePasswordDone />} />
          <Route exact path="/password_reset" element={<PasswordReset />} />
          <Route exact path="/resend_link" element={<ResendLink />} />
          {/* prettier-ignore */}
          <Route exact path="/password_reset/done" element={<PasswordResetDone />} />
          {/* prettier-ignore */}
          <Route exact path="/resetPassword/:token" element={<PasswordResetConfirm />} />
          <Route exact path="/reset/done" element={<PasswordResetComplete />} />
          <Route path="*" element={<Navigate to="/404" />} exact />
          <Route path="/404" element={<NotFoundPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
