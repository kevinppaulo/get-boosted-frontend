import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conversations from "./pages/Conversations";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Messages from "./pages/Messages";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/conversations/:id" element={<Messages />} />
        <Route exact path="/conversations" element={<Conversations />} />
      </Routes>
    </Router>
  );
}
