import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScreenLayout from "./layout/ScreenLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { lazy, Suspense } from "react";
import AppLayout from "./layout/AppLayout";
import Info from "./pages/Info";
import AppHome from "./pages/AppHome";
import Exercise from "./pages/Exercise";
import ExerciseContent from "./components/ExerciseContent";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

// Mock authentication function (Replace with real logic)
const isAuthenticated = () => !!localStorage.getItem("authToken");

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ScreenLayout />}>
            {/* normal Routes */}
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Protected Routes */}
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AppHome />} />
            <Route path="exercise" element={<Exercise />}>
              <Route path=":topic" element={<ExerciseContent />} />
            </Route>
            <Route path="info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
