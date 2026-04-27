"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Websites launched" },
  { value: 500, suffix: "+", label: "Outreach touches" },
  { value: 48, suffix: "hr", label: "Average turnaround" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div className="statsGrid">
          {stats.map((s) => (
            <div key={s.label} className="statItem">
              <div className="statValue">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </div>
              <p className="mutedSmall">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
