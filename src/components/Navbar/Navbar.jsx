import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://res.cloudinary.com/oapmwjam/image/upload/v1786752071/LOGO_HEADER_2.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner">

        {/* MENÚ IZQUIERDO */}
        <nav className="nav-side nav-side--left">
          <Link to="/inicio" className="nav-link">
            Inicio
          </Link>

          <Link to="/eventos" className="nav-link">
            Eventos
          </Link>
        </nav>

        {/* LOGO CENTRADO */}
        <Link
          to="/inicio"
          className="logo"
          onClick={handleLinkClick}
        >
          <img src={LOGO_URL} alt="GODO Running" />
        </Link>

        {/* MENÚ DERECHO */}
        <nav className="nav-side nav-side--right">
          <Link to="/nosotros" className="nav-link">
            Nosotros
          </Link>

          <Link
            to="/#unirse"
            className="btn-accent nav-cta"
          >
            Únete al equipo
          </Link>
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          className={`nav-toggle ${
            isMenuOpen ? "nav-toggle--open" : ""
          }`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Cerrar menú" : "Abrir menú"
          }
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MENÚ MOBILE */}
      <nav
        className={`nav-mobile-panel ${
          isMenuOpen ? "nav-mobile-panel--open" : ""
        }`}
      >
        <Link
          to="/inicio"
          className="nav-link"
          onClick={handleLinkClick}
        >
          Inicio
        </Link>

        <Link
          to="/eventos"
          className="nav-link"
          onClick={handleLinkClick}
        >
          Eventos
        </Link>

        <Link
          to="/nosotros"
          className="nav-link"
          onClick={handleLinkClick}
        >
          Nosotros
        </Link>

        <Link
          to="/#unirse"
          className="btn-accent nav-cta nav-cta--mobile"
          onClick={handleLinkClick}
        >
          Únete al equipo
        </Link>
      </nav>
    </header>
  );
}