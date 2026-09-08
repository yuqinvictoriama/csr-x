(() => {
  const graphic = document.querySelector("[data-orbit-cursor]");
  if (!graphic || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const clamp = (value) => Math.max(-1, Math.min(1, value));
  const smoothstep = (value) => value * value * (3 - 2 * value);
  const outerOrbit = graphic.querySelector(".orbit-one");
  const middleOrbit = graphic.querySelector(".orbit-two");
  const innerOrbit = graphic.querySelector(".orbit-three");
  const core = graphic.querySelector(".core");
  let frame = 0;
  const target = { x: 0, y: 0, influence: 0, depth: 0 };
  const current = { x: 0, y: 0, influence: 0, depth: 0 };

  const setOrbitMotion = (orbit, shiftX, shiftY, rotateX, rotateY, depth = 0) => {
    if (!orbit) return;
    orbit.style.setProperty("--orbit-shift-x", `${shiftX}px`);
    orbit.style.setProperty("--orbit-shift-y", `${shiftY}px`);
    orbit.style.setProperty("--orbit-pointer-x", `${rotateX}deg`);
    orbit.style.setProperty("--orbit-pointer-y", `${rotateY}deg`);
    orbit.style.setProperty("--orbit-cursor-depth", `${depth}px`);
  };

  const applyMotion = () => {
    const x = current.x * current.influence;
    const y = current.y * current.influence;

    graphic.style.setProperty("--cursor-shift-x", `${x * 1.4}px`);
    graphic.style.setProperty("--cursor-shift-y", `${y * 1.1}px`);
    graphic.style.setProperty("--cursor-rotate-x", `${y * -1.4}deg`);
    graphic.style.setProperty("--cursor-rotate-y", `${x * 1.8}deg`);

    setOrbitMotion(outerOrbit, x * 20, 0, 0, 0);
    setOrbitMotion(middleOrbit, 0, y * 18, 0, 0);
    setOrbitMotion(innerOrbit, 0, 0, 0, 0, current.depth * current.influence);
    core?.style.setProperty("--core-shift-x", `${x * 2}px`);
    core?.style.setProperty("--core-shift-y", `${y * 2}px`);
    core?.style.setProperty("--core-depth", `${current.depth * current.influence * 0.2}px`);
  };

  const animate = () => {
    const ease = 0.105;
    current.x += (target.x - current.x) * ease;
    current.y += (target.y - current.y) * ease;
    current.influence += (target.influence - current.influence) * ease;
    current.depth += (target.depth - current.depth) * ease;
    applyMotion();

    const unsettled =
      Math.abs(target.x - current.x) > 0.0005 ||
      Math.abs(target.y - current.y) > 0.0005 ||
      Math.abs(target.influence - current.influence) > 0.0005 ||
      Math.abs(target.depth - current.depth) > 0.01;

    frame = unsettled ? requestAnimationFrame(animate) : 0;
  };

  const scheduleMotion = () => {
    if (!frame) frame = requestAnimationFrame(animate);
  };

  const reset = () => {
    target.x = 0;
    target.y = 0;
    target.influence = 0;
    target.depth = 0;
    scheduleMotion();
  };

  window.addEventListener("pointermove", (event) => {
    const bounds = graphic.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;
    const distance = Math.hypot(offsetX, offsetY);
    const size = Math.min(bounds.width, bounds.height);
    const halfSize = size / 2;
    const fadeDistance = Math.min(64, Math.max(42, size * 0.12));
    const activationRadius = halfSize + Math.min(48, size * 0.09);

    if (distance > activationRadius) {
      reset();
      return;
    }

    const rawInfluence = clamp((activationRadius - distance) / fadeDistance);
    target.x = clamp(offsetX / halfSize);
    target.y = clamp(offsetY / halfSize);
    target.influence = smoothstep(Math.max(0, rawInfluence));
    target.depth = Math.max(0, 1 - distance / halfSize) * 42;
    scheduleMotion();
  }, { passive: true });

  window.addEventListener("blur", reset);
  document.documentElement.addEventListener("mouseleave", reset);
})();
