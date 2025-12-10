// Tab functionality for skills section
function initSkillsTabs() {
  const tabs = document.querySelectorAll(".skill-tab");
  const categories = document.querySelectorAll(".skill-category");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const targetId = tab.getAttribute("data-tab");

      categories.forEach((category) => {
        category.classList.remove("active");
      });

      document.getElementById(targetId).classList.add("active");
    });
  });

  initTechIconTooltips();
}

function initTechIconTooltips() {
  const techIcons = document.querySelectorAll(".tech-icon, .tech-icon-lg");

  techIcons.forEach((icon) => {
    let timeout;

    icon.addEventListener("mouseenter", function () {
      clearTimeout(timeout);
    });

    icon.addEventListener("mouseleave", function () {
      timeout = setTimeout(() => {}, 100);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initSkillsTabs();
});
