document.addEventListener("DOMContentLoaded", function () {
    const featureItems = document.querySelectorAll(".feature-item");
    const featureImage = document.querySelector(
      ".features .feature-image-placeholder"
    );
    const howToUseImage = document.querySelector(
      ".how-to-use .feature-image-placeholder"
    );
    const diagramPlaceholders = document.querySelectorAll(
      ".architecture-diagrams .diagram-placeholder"
    );

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    featureItems.forEach((item) => {
      observer.observe(item);
    });

    if (featureImage) observer.observe(featureImage);
    if (howToUseImage) observer.observe(howToUseImage);
    diagramPlaceholders.forEach((item) => {
      observer.observe(item);
    });
  });
  // JavaScript to handle popup functionality
  function openPopup(src) {
    document.getElementById("popupImage").src = src;
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal-from-bottom");

    const revealOnScroll = () => {
      const viewportHeight = window.innerHeight;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < viewportHeight - 50) {
          element.classList.add("active"); // 'active' class triggers the animation
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);

    // Trigger reveal on initial load
    revealOnScroll();
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
