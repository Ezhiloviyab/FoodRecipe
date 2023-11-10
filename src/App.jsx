import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import ReviewPage from "./Pages/Reviews";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Settings from "./Pages/Settings";
import LoginForm  from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/review" element={<ReviewPage/>} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;