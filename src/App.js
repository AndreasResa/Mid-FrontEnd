import Header from "./components/Header";
import Aside from "./components/Aside";
import About from "./components/About";
import Skills from "./components/Skills";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Aside />
      <main className="main">
        <About />
        <Skills />
      </main>
      <footer className="footer" />
    </div>
  );
};
export default App;
