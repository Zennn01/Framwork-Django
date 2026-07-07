function initSliders() {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const track = slider.querySelector("[data-slider-track]");
    const prev = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");

    if (!track) return;

    const getStep = () => {
      const firstItem = track.children[0];
      if (!firstItem) return track.clientWidth;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
      return firstItem.getBoundingClientRect().width + gap;
    };

    prev?.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });

    next?.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    track.addEventListener("pointerdown", (event) => {
      isDown = true;
      startX = event.clientX;
      scrollLeft = track.scrollLeft;
      track.classList.add("is-dragging");
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener("pointermove", (event) => {
      if (!isDown) return;
      track.scrollLeft = scrollLeft - (event.clientX - startX);
    });

    const stopDrag = () => {
      isDown = false;
      track.classList.remove("is-dragging");
    };

    track.addEventListener("pointerup", stopDrag);
    track.addEventListener("pointercancel", stopDrag);
    track.addEventListener("pointerleave", stopDrag);
  });
}
