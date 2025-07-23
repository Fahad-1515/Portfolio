const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const navbar = document.getElementById("navbar");
const body = document.body;

// Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Theme toggle function
function setTheme(theme) {
  if (theme === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    navbar.classList.remove("dark");
    navbar.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    navbar.classList.remove("light");
    navbar.classList.add("dark");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

const cursor = document.getElementById("custom-cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
//
const projects = [
  {
    title: "T-Virus Scanner",
    description: "Biohazard AI Surveillance",
    image:
      "https://i.pinimg.com/736x/e0/f3/be/e0f3bed6224d48532e6b92de6e729427.jpg",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Umbrella Dashboard",
    description: "Secure Operations Panel",
    image: "https://via.placeholder.com/400x280?text=Umbrella+Ops",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Containment Map",
    description: "Live Zone Monitoring",
    image: "https://via.placeholder.com/400x280?text=Containment",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Hazmat Tracker",
    description: "Mobile Safety Unit",
    image: "https://via.placeholder.com/400x280?text=Hazmat+Tracker",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Mutation Monitor",
    description: "DNA Sequence Watch",
    image: "https://via.placeholder.com/400x280?text=Mutation",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Dark Room Logs",
    description: "Encrypted Threat Logs",
    image: "https://via.placeholder.com/400x280?text=Logs",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "T-Virus Scanner",
    description: "Biohazard AI Surveillance",
    image:
      "https://i.pinimg.com/736x/e0/f3/be/e0f3bed6224d48532e6b92de6e729427.jpg",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Umbrella Dashboard",
    description: "Secure Operations Panel",
    image: "https://via.placeholder.com/400x280?text=Umbrella+Ops",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Containment Map",
    description: "Live Zone Monitoring",
    image: "https://via.placeholder.com/400x280?text=Containment",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Hazmat Tracker",
    description: "Mobile Safety Unit",
    image: "https://via.placeholder.com/400x280?text=Hazmat+Tracker",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Mutation Monitor",
    description: "DNA Sequence Watch",
    image:
      "https://i.pinimg.com/736x/7a/d4/17/7ad417568c19f0b82927dedeccf36bbe.jpg",
    link: "https://example.com/t-virus-scanner",
  },
  {
    title: "Dark Room Logs",
    description: "Encrypted Threat Logs",
    image: "https://via.placeholder.com/400x280?text=Logs",
    link: "https://ample.com/t-virus-scanner",
  },
];
const itemsPerPage = 6;
let currentPage = 0;
const grid = document.getElementById("portfolioGrid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("paginationDots");

function renderGrid() {
  grid.classList.add("fade-out");
  setTimeout(() => {
    grid.innerHTML = "";
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = projects.slice(start, end);
    pageItems.forEach((project) => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.innerHTML = `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <img src="${project.image}" alt="${project.title}">
        <div class="portfolio-overlay">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      grid.appendChild(card);
    });
    grid.classList.remove("fade-out");
    updateButtons();
    updateDots();
  }, 300);
}

function updateButtons() {
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = (currentPage + 1) * itemsPerPage >= projects.length;
}
function updateDots() {
  dotsContainer.innerHTML = "";
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("button");
    dot.className = i === currentPage ? "active" : "";
    dot.setAttribute("aria-label", `Page ${i + 1}`);
    dot.addEventListener("click", () => {
      if (i !== currentPage) {
        currentPage = i;
        renderGrid();
      }
    });
    dotsContainer.appendChild(dot);
  }
}
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderGrid();
  }
});
nextBtn.addEventListener("click", () => {
  if ((currentPage + 1) * itemsPerPage < projects.length) {
    currentPage++;
    renderGrid();
  }
});
renderGrid();
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update button styling
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-gray-300", "text-gray-800");
    });
    button.classList.add("bg-blue-600", "text-white");
    button.classList.remove("bg-gray-300", "text-gray-800");

    // Show/Hide tab contents
    tabContents.forEach((tab) => tab.classList.add("hidden"));
    document
      .getElementById(button.getAttribute("data-tab"))
      .classList.remove("hidden");
  });
});
