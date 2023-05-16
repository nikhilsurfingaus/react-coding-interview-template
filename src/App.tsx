import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Dropdown from "./pages/Dropdown";
import Home from "./pages/Home";
import Peoples from "./pages/Peoples";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/peoples" element={<Peoples />} />
        </Routes>
      </Router>
    </>
  );
}
