import "./AboutHero.css";

const AboutHero = ({ data }) => {
  return (
    <section className="about-hero">
      <div className="about-hero__inner">

        {/* CONTENIDO */}
        <div className="about-hero__content">

          <span className="about-hero__eyebrow">
            {data.eyebrow}
          </span>

          <h1 className="about-hero__title">
            {data.title}
          </h1>

          <p className="about-hero__description">
            {data.description}
          </p>

          <a
            href="#historia"
            className="about-hero__button"
          >
            {data.buttonText}
          </a>

        </div>


        {/* IMAGEN */}
        <div className="about-hero__visual">

          <img
            src={data.image}
            alt="GODO Running"
            className="about-hero__image"
          />

        </div>

      </div>
    </section>
  );
};

export default AboutHero;