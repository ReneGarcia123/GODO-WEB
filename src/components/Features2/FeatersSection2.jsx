import "./Philosophy.css";
import features from "./Features_card2";
import features_head from "./Features_header2";

export default function FeaturesSection2() {
  return (
    <section className="philosophy-section">

      <div className="philosophy-header">

        <span className="philosophy-eyebrow">
          Nuestra filosofía
        </span>

        <h2>
          {features_head.title}
        </h2>

        <p>
          {features_head.subtitle}
        </p>

      </div>


      <div className="philosophy-grid">

        {features.map((item, index) => (

          <article
            key={index}
            className="philosophy-card"
          >

            <span className="philosophy-card__number">
              0{index + 1}
            </span>

            <div className="philosophy-card__icon">
              {item.icon}
            </div>

            <div className="philosophy-card__content">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}