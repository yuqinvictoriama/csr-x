(() => {
  const title = document.querySelector("[data-hero-title]");
  if (!title) return;

  // Split into per-letter spans, keeping words unbreakable and <br> line breaks.
  // The real headline stays available to assistive tech via aria-label.
  title.setAttribute("aria-label", title.textContent.replace(/\s+/g, " ").trim());
  const lines = title.innerHTML.split(/<br\s*\/?>/i);
  // Words alternate purple/white across the whole headline, not per line.
  let wordIndex = 0;
  title.innerHTML = lines
    .map((line) => {
      const words = line.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean);
      const markup = words
        .map((word) => {
          const accent = wordIndex++ % 2 === 0 ? " is-accent" : "";
          const letters = Array.from(word)
            .map((character) => `<span class="hero-letter${accent}">${character}</span>`)
            .join("");
          return `<span class="hero-word">${letters}</span>`;
        })
        .join(" ");
      return `<span aria-hidden="true">${markup}</span>`;
    })
    .join("<br>");

  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const RADIUS = 105;
  const letters = Array.from(title.querySelectorAll(".hero-letter"));
  if (!letters.length) return;

  // Cached so pointermove never calls getBoundingClientRect in a loop.
  let centers = [];
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
      letters[i].style.setProperty("--near", (near * near * (3 - 2 * near)).toFixed(3));
    }
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(paint);
  };

  measure();
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    schedule();
  }, { passive: true });
  window.addEventListener("resize", () => { measure(); schedule(); });
  window.addEventListener("scroll", () => { measure(); schedule(); }, { passive: true });
  title.addEventListener("pointerleave", () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    letters.forEach((letter) => letter.style.setProperty("--near", "0"));
  });
})();
