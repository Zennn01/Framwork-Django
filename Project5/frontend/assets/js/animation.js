function initNavbarShadow() {
  const navbar = document.querySelector("[data-navbar]");
  if (!navbar) return;

  const updateShadow = () => {
    navbar.classList.toggle("has-shadow", window.scrollY > 8);
  };

  updateShadow();
  window.addEventListener("scroll", updateShadow, { passive: true });
}

function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}
