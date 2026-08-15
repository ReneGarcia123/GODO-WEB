import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import "./Footer.css";

const LOGO_URL =
  "https://res.cloudinary.com/oapmwjam/image/upload/v1786752071/LOGO_HEADER_2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ============================================
          CONTENIDO PRINCIPAL
          ============================================ */}

      <div className="footer__container">

        {/* ============================================
            MARCA
            ============================================ */}

        <div className="footer__brand">

          <Link
            to="/inicio"
            className="footer__logo"
          >
            <img
              src={LOGO_URL}
              alt="GODO Running"
            />
          </Link>

          <p className="footer__description">
            Corre. Supera tus límites. Forma parte de
            algo más grande.
          </p>

        </div>


        {/* ============================================
            NAVEGACIÓN
            ============================================ */}

        <div className="footer__column">

          <h3 className="footer__title">
            Navegación
          </h3>

          <nav className="footer__links">

            <Link to="/inicio">
              Inicio
            </Link>

            <Link to="/eventos">
              Eventos
            </Link>

            <Link to="/nosotros">
              Nosotros
            </Link>

          </nav>

        </div>


        {/* ============================================
            COMUNIDAD
            ============================================ */}

        <div className="footer__column footer__community">

          <h3 className="footer__title">
            Comunidad
          </h3>

          <div className="footer__socials">

            <a
              href="#"
              className="footer__social"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a
              href="#"
              className="footer__social"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>

            <a
              href="#"
              className="footer__social"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
              <span>TikTok</span>
            </a>

          </div>

        </div>

      </div>


      {/* ============================================
          PARTE INFERIOR
          ============================================ */}

      <div className="footer__bottom">

        <p>
          © {currentYear} GODO Running. Todos los
          derechos reservados.
        </p>

        <div className="footer__bottom-links">

          <a href="#">
            Privacidad
          </a>

          <a href="#">
            Términos
          </a>

        </div>

      </div>

    </footer>
  );
}