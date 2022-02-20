import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import NewItem from "./pages/NewItem";

import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/newitems" element={<NewItem />} />
      </Routes>
    </Layout>
  );
}

export default App;
