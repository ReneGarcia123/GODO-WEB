import { useState } from "react";
import "./Gallery.css";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">

      {/* ============================================
          HEADER
          ============================================ */}

      <div className="gallery-header">

        <span className="gallery-eyebrow">
          GODO RUNNING
        </span>

        <h2>
          Momentos que
          <span> nos mueven</span>
        </h2>

        <p>
          Cada kilómetro, cada esfuerzo y cada llegada
          forman parte de nuestra historia.
        </p>

      </div>


      {/* ============================================
          GALERÍA
          ============================================ */}

      <div className="gallery-grid">

        {images?.map((image, index) => (
          <button
            key={index}
            className={`gallery-item gallery-item--${index + 1}`}
            onClick={() => setSelectedImage(image)}
            aria-label={`Ver imagen ${index + 1}`}
          >

            <img
              src={image.src}
              alt={image.alt || ""}
              loading="lazy"
            />

            <div className="gallery-item__overlay">
              <span>+</span>
            </div>

          </button>
        ))}

      </div>


      {/* ============================================
          LIGHTBOX
          ============================================ */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >

          <button
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt || ""}
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
}