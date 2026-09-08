"use client";

import { Fragment, useEffect, useRef } from "react";

const LINES = [["Collaborative"], ["Summer", "Research"], ["Experience"]];
const TEXT = LINES.map((line) => line.join(" ")).join(" ");

/** Words alternate purple/white across the whole headline, not per line. */
const LINE_WORDS = (() => {
  let index = 0;
  return LINES.map((line) => line.map((word) => ({ word, accent: index++ % 2 === 0 })));
})();

/** How far from the cursor a letter still reacts, in px. */
const RADIUS = 105;

export default function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const letters = Array.from(title.querySelectorAll<HTMLElement>(".hero-letter"));
    if (!letters.length) return;

    // Rects are cached: measuring ~40 letters on every pointermove thrashes layout.
    let centers: { x: number; y: number }[] = [];
    const measure = () => {
      centers = letters.map((letter) => {
        const rect = letter.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
    };

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      frame = 0;
      for (let i = 0; i < letters.length; i += 1) {
        const center = centers[i];
        if (!center) continue;
        const distance = Math.hypot(pointerX - center.x, pointerY - center.y);
        const near = Math.max(0, 1 - distance / RADIUS);
        // Ease the falloff so the wave crests instead of forming a hard cone.
        letters[i].style.setProperty("--near", (near * near * (3 - 2 * near)).toFixed(3));
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      schedule();
    };

    const onPointerLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      for (const letter of letters) letter.style.setProperty("--near", "0");
    };

    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });
    title.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
      title.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    // The split text is hidden from assistive tech; the label carries the real headline.
    <h1 aria-label={TEXT} ref={titleRef}>
      {LINE_WORDS.map((words, lineIndex) => (
        <span aria-hidden="true" key={lineIndex}>
          {words.map(({ word, accent }, wordIndex) => (
            // The space sits *between* the word spans: a trailing space inside an
            // inline-block nowrap span is collapsed away, running the words together.
            <Fragment key={word}>
              <span className="hero-word">
                {Array.from(word).map((character, index) => (
                  <span
                    className={`hero-letter${accent ? " is-accent" : ""}`}
                    key={`${word}-${index}`}
                  >
                    {character}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 ? " " : null}
            </Fragment>
          ))}
          {lineIndex < LINE_WORDS.length - 1 ? <br /> : null}
        </span>
      ))}
    </h1>
  );
}
