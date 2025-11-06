// Tab switching functionality
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Show corresponding content
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

// Add click effect to project and certificate cards
function initCardEffects() {
  document
    .querySelectorAll(".project-card, .certificate-card")
    .forEach((card) => {
      card.addEventListener("click", function (e) {
        // Add a ripple effect
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initTabs();
  initCardEffects();

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
      title: "MovieDB",
      description:
        "A Modern Movie🍿🎬 discovery website built with React, Vite, and Tailwind CSS.",
      image:
        "https://i.pinimg.com/1200x/ee/d3/43/eed3430cf06955e80374669da8eff399.jpg",
      link: "https://movie-db-nine-omega.vercel.app/",
    },
    {
      title: "Weatherapp🌡️☁️",
      description:
        "Weather Forecast for 7 Days to a specific Location and Weekly Weatherforecast",
      image:
        "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
      link: "https://weatherapp-4jxsupwkeattyvmbyndkz2.streamlit.app/",
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
  // Add this to your script.js
  document
    .getElementById("template-toggle")
    .addEventListener("change", function () {
      // Add your toggle functionality here
      // For example, you could toggle between different template views
      console.log("Template view toggled");

      // Example: Toggle a class on the template container
      document
        .querySelector(".template-section")
        .classList.toggle("alternate-view");
    });

  // Initialize EmailJS with your credentials
  // You need to sign up at https://www.emailjs.com/ and get these values
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

  // Real-time Snake Animation
  class SnakeAnimation {
    constructor() {
      this.snake = document.getElementById("snake");
      this.trailContainer = document.getElementById("snakeTrail");
      this.container = document.querySelector(".contact-container");
      this.animationId = null;
      this.startTime = null;
      this.duration = 6000;
      this.trailInterval = 80;
      this.lastTrailTime = 0;

      this.init();
    }

    init() {
      this.startAnimation();
      this.createInitialTrail();
    }

    startAnimation() {
      this.startTime = performance.now();
      this.animate();
    }

    animate(currentTime = 0) {
      if (!this.startTime) this.startTime = currentTime;

      const elapsed = currentTime - this.startTime;
      const progress = (elapsed % this.duration) / this.duration;

      this.updateSnakePosition(progress);

      if (currentTime - this.lastTrailTime > this.trailInterval) {
        this.addTrailDot(progress);
        this.lastTrailTime = currentTime;
      }

      this.animationId = requestAnimationFrame((time) => this.animate(time));
    }

    updateSnakePosition(progress) {
      const containerRect = this.container.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height;

      let x, y;

      if (progress < 0.25) {
        const edgeProgress = progress / 0.25;
        x = edgeProgress * width;
        y = 0;
      } else if (progress < 0.5) {
        const edgeProgress = (progress - 0.25) / 0.25;
        x = width;
        y = edgeProgress * height;
      } else if (progress < 0.75) {
        const edgeProgress = (progress - 0.5) / 0.25;
        x = width - edgeProgress * width;
        y = height;
      } else {
        const edgeProgress = (progress - 0.75) / 0.25;
        x = 0;
        y = height - edgeProgress * height;
      }

      this.snake.style.left = `${x}px`;
      this.snake.style.top = `${y}px`;
    }

    addTrailDot(progress) {
      const trailDot = document.createElement("div");
      trailDot.classList.add("trail-dot");

      const x = parseFloat(this.snake.style.left);
      const y = parseFloat(this.snake.style.top);

      const variation = (Math.random() - 0.5) * 8;
      trailDot.style.left = `${x + variation}px`;
      trailDot.style.top = `${y + variation}px`;

      this.trailContainer.appendChild(trailDot);

      setTimeout(() => {
        if (trailDot.parentNode) {
          trailDot.parentNode.removeChild(trailDot);
        }
      }, 1500);
    }

    createInitialTrail() {
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const progress = (i / 15) * 0.2;
          this.addTrailDot(progress);
        }, i * 100);
      }
    }
  }

  // Create floating particles
  function createParticles() {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const left = Math.random() * 100;
      const top = Math.random() * 100;

      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;

      const duration = 3 + Math.random() * 5;
      const delay = Math.random() * 5;

      particle.style.animation = `float ${duration}s ${delay}s infinite`;

      particlesContainer.appendChild(particle);
    }
  }

  // Form validation and submission
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const errorText = document.getElementById("errorText");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      submitForm();
    }
  });

  // Real-time validation
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      clearError(this);
    });
  });

  function validateForm() {
    let isValid = true;

    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + "Error");

    if (field.hasAttribute("required") && value === "") {
      showError(
        field,
        errorElement,
        `${field.previousElementSibling.textContent} is required`
      );
      return false;
    }

    if (field.type === "email" && value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(field, errorElement, "Please enter a valid email address");
        return false;
      }
    }

    clearError(field);
    return true;
  }

  function showError(field, errorElement, message) {
    field.style.borderColor = "#ff4444";
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearError(field) {
    field.style.borderColor = "#444";
    const errorElement = document.getElementById(field.id + "Error");
    errorElement.style.display = "none";
  }

  function submitForm() {
    // Show loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;
    hideMessages();

    // Get form data
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
      timestamp: new Date().toLocaleString(),
    };

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData
      )
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showSuccess();
        form.reset();
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        showErrorMsg("Failed to send message. Please try again later.");
      })
      .finally(function () {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
      });
  }

  function showSuccess() {
    successMessage.style.display = "block";
    errorMessage.style.display = "none";

    // Create celebration effect
    createCelebrationParticles();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }

  function showErrorMsg(message) {
    errorText.textContent = message;
    errorMessage.style.display = "block";
    successMessage.style.display = "none";

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 5000);
  }

  function hideMessages() {
    successMessage.style.display = "none";
    errorMessage.style.display = "none";
  }

  function createCelebrationParticles() {
    const form = document.querySelector(".contact-form");
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.background = "#39ff14";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.left = "50%";
      particle.style.top = "50%";

      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 100;
      const duration = 1 + Math.random() * 1;

      particle.style.animation = `celebrate ${duration}s forwards`;

      const style = document.createElement("style");
      style.textContent = `
                      @keyframes celebrate {
                          to {
                              transform: translate(${
                                Math.cos(angle) * distance
                              }px, ${Math.sin(angle) * distance}px);
                              opacity: 0;
                          }
                      }
                  `;
      document.head.appendChild(style);

      form.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }
  }

  // Copy to clipboard function
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showNotification("Copied to clipboard!");
      })
      .catch(() => {
        showNotification("Failed to copy to clipboard");
      });
  }

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.background = "#39ff14";
    notification.style.color = "#000";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    notification.style.fontWeight = "bold";
    notification.style.boxShadow = "0 4px 12px rgba(57, 255, 20, 0.3)";

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 2000);
  }

  function showLocation() {
    showNotification("Location: New York, NY");
    // In real implementation, you could open Google Maps
    // window.open('https://maps.google.com/?q=New+York,NY', '_blank');
  }

  // Initialize everything when page loads
  window.addEventListener("load", function () {
    createParticles();
    const snakeAnimation = new SnakeAnimation();

    // Add interactive hover effects
    document.querySelectorAll(".contact-item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(5px)";
      });

      item.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)";
      });
    });

    // Add floating animation style
    const style = document.createElement("style");
    style.textContent = `
                  @keyframes float {
                      0%, 100% {
                          transform: translate(0, 0);
                          opacity: 0;
                      }
                      50% {
                          opacity: 0.7;
                      }
                      25%, 75% {
                          transform: translate(${Math.random() * 20 - 10}px, ${
      Math.random() * 20 - 10
    }px);
                      }
                  }
              `;
    document.head.appendChild(style);
  });

  // Demo mode notification
  window.addEventListener("load", function () {
    setTimeout(() => {
      showNotification(
        "Demo Mode: Form submission simulated. In production, configure EmailJS with your credentials."
      );
    }, 3000);
  });

  // Start on page load

  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Typing effect
  // Typing Animation
  document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Full Stack Developer", "Data Analyst", "AI Engineer"];
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
      const cursorElement = document.createElement("span");
      cursorElement.className = "cursor";

      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      let deleteSpeed = 50;
      let pauseTime = 2000;

      function type() {
        const currentRole = roles[roleIndex];

        if (!isDeleting && charIndex < currentRole.length) {
          // Typing forward
          typingElement.innerHTML = currentRole.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
          // Deleting
          typingElement.innerHTML = currentRole.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, deleteSpeed);
        } else if (!isDeleting && charIndex === currentRole.length) {
          // Finished typing current role - add cursor
          typingElement.appendChild(cursorElement);
          setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseTime);
        } else {
          // Finished deleting, move to next role
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 500);
        }
      }

      // Start the typing effect
      setTimeout(type, 1000);
    }
  });

  //
});
