import { Link } from "react-router-dom";
import "./AboutPreview.css";

export default function AboutPreview({ data }) {
  return (
    <section className="about-preview">

      {/* ============================================
          IMAGEN
          ============================================ */}

      <div className="about-preview__image-wrapper">

        {data.image && (
          <img
            className="about-preview__image"
            src={data.image.src}
            alt={data.image.alt || ""}
          />
        )}

      </div>


      {/* ============================================
          CONTENIDO
          ============================================ */}

      <div className="about-preview__content">

        {data.eyebrow && (
          <span className="about-preview__eyebrow">
            {data.eyebrow}
          </span>
        )}

        {data.title && (
          <h2 className="about-preview__title">
            {data.title}
          </h2>
        )}

        {data.description && (
          <p className="about-preview__description">
            {data.description}
          </p>
        )}

        {data.button && (
          <Link
            to={data.button.href}
            className="about-preview__button"
          >
            {data.button.text}
          </Link>
        )}

      </div>

    </section>
  );
}