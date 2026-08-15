import React from "react";
import "./NextEvent.css";

const NextEvent = ({ data }) => {
  return (
    <section className="next-event" id="proximo-evento">
      <div className="next-event__inner">

        {/* IMAGEN */}
        <div className="next-event__image">
          <img
            src={data.image}
            alt={data.title}
          />
        </div>

        {/* CONTENIDO */}
        <div className="next-event__content">

          <span className="next-event__eyebrow">
            {data.eyebrow}
          </span>

          <h2 className="next-event__title">
            {data.title}
          </h2>

          <span className="next-event__edition">
            {data.edition}
          </span>

          <p className="next-event__description">
            {data.description}
          </p>

          {/* INFORMACIÓN */}
          <div className="next-event__info">

            <div className="next-event__info-item">
              <span className="next-event__info-label">
                FECHA
              </span>

              <span className="next-event__info-value">
                {data.date}
              </span>
            </div>

            <div className="next-event__info-item">
              <span className="next-event__info-label">
                LUGAR
              </span>

              <span className="next-event__info-value">
                {data.location}
              </span>
            </div>

          </div>

          {/* BOTÓN */}
          <a
            href={data.buttonUrl}
            className="next-event__button"
            rel="noopener noreferrer"
          >
            {data.buttonText}
          </a>

        </div>

      </div>
    </section>
  );
};

export default NextEvent;