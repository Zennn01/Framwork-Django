function initCategoryTabs() {
  const categories = document.querySelectorAll("[data-category]");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      categories.forEach((item) => item.classList.remove("is-active"));
      category.classList.add("is-active");
    });
  });
}
