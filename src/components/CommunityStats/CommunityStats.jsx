import { useEffect, useRef, useState } from "react";
import "./CommunityStats.css";

export default function CommunityStats({ data }) {
  const [counts, setCounts] = useState(
    () => data.stats?.map(() => 0) || []
  );

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!data?.stats?.length) return;

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // Suaviza el movimiento del contador
          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setCounts(
            data.stats.map((stat) =>
              Math.floor(stat.value * easedProgress)
            )
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(data.stats.map((stat) => stat.value));
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [data]);

  if (!data?.stats?.length) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="community-stats"
    >

      <div className="community-stats__inner">

        {/* ============================================
            HEADER
            ============================================ */}

        <header className="community-stats__header">

          {data.eyebrow && (
            <span className="community-stats__eyebrow">
              {data.eyebrow}
            </span>
          )}

          {data.title && (
            <h2 className="community-stats__title">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="community-stats__description">
              {data.description}
            </p>
          )}

        </header>


        {/* ============================================
            ESTADÍSTICAS
            ============================================ */}

        <div className="community-stats__grid">

          {data.stats.map((stat, index) => (
            <article
              key={index}
              className="community-stat"
            >

              <div className="community-stat__number">

                <span>
                  {counts[index]?.toLocaleString("es-PE")}
                </span>

                {stat.suffix && (
                  <span className="community-stat__suffix">
                    {stat.suffix}
                  </span>
                )}

              </div>


              <span className="community-stat__label">
                {stat.label}
              </span>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}