import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
       <Route
         path="/profile/*"
         element={
           <ProtectedRoute>
             <Profile />
           </ProtectedRoute>
          }
       />


        {/* ✅ Dynamic Blog Route (REQUIRED) */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
