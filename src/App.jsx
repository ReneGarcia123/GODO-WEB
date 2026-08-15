import "./App.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Inicio from "./Inicio.jsx";
import Nosotros from "./Nosotros.jsx";
import Eventos from "./Eventos.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main className="app__content">
          <Routes>

            <Route
              path="/"
              element={<Navigate to="/inicio" replace />}
            />

            <Route
              path="/inicio"
              element={<Inicio />}
            />

            <Route
              path="/nosotros"
              element={<Nosotros />}
            />

            <Route
              path="/eventos"
              element={<Eventos />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
