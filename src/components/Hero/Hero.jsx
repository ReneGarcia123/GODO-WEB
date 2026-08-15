import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero({ data }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!data?.images?.length || data.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((current) => {
        return (current + 1) % data.images.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.images]);

  return (
    <section className="hero">

      {/* ============================================
          FONDO
          ============================================ */}

      <div className="hero__background">

        {data.images?.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || ""}
            className={
              index === activeImage
                ? "hero__image hero__image--active"
                : "hero__image"
            }
          />
        ))}

      </div>


      {/* ============================================
          OVERLAY
          ============================================ */}

      <div className="hero__overlay" />


      {/* ============================================
          CONTENIDO
          ============================================ */}

      <div className="hero__content">

        {data.eyebrow && (
          <span className="hero__eyebrow">
            {data.eyebrow}
          </span>
        )}

        {data.title && (
          <h1 className="hero__title">
            {data.title}
          </h1>
        )}

        {data.subtitle && (
          <h2 className="hero__subtitle">
            {data.subtitle}
          </h2>
        )}

        {data.description && (
          <p className="hero__description">
            {data.description}
          </p>
        )}

        {data.buttons && (
          <div className="hero__actions">

            {data.buttons.primary && (
              <Link
                to={data.buttons.primary.href}
                className="btn-accent"
              >
                {data.buttons.primary.text}
              </Link>
            )}

            {data.buttons.secondary && (
              <Link
                to={data.buttons.secondary.href}
                className="hero__secondary"
              >
                {data.buttons.secondary.text}
              </Link>
            )}

          </div>
        )}

      </div>


      {/* ============================================
          SCROLL
          ============================================ */}

      {data.scrollText && (
        <div className="hero__scroll">

          <span>
            {data.scrollText}
          </span>

          <span className="hero__scroll-arrow">
            ↓
          </span>

        </div>
      )}

    </section>
  );
}