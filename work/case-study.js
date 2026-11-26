const themeButton = document.querySelector(".case-theme");

function updateTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Theme changes remain available even if local storage is disabled.
  }
}

try {
  if (localStorage.getItem("portfolio-theme") === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeButton.setAttribute("aria-label", "Switch to light mode");
  }
} catch {
  // Keep the default light theme when local storage is disabled.
}

themeButton.addEventListener("click", () => {
  updateTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const wireframeTrigger = document.querySelector(".wireframe-zoom-trigger");
const wireframeLightbox = document.querySelector(".wireframe-lightbox");
if (wireframeTrigger && wireframeLightbox) {
  const closeButton = wireframeLightbox.querySelector(".wireframe-lightbox-close");
  const stage = wireframeLightbox.querySelector(".wireframe-lightbox-stage");
  const image = stage.querySelector("img");
  const zoomLevel = wireframeLightbox.querySelector(".wireframe-zoom-level");
  let zoom = 1;
  let fittedWidth = 0;

  function updateZoom(nextZoom) {
    zoom = Math.max(0.5, Math.min(3, nextZoom));
    stage.classList.toggle("is-zoomed", zoom > 1);
    image.style.setProperty("--wireframe-image-width", `${fittedWidth * zoom}px`);
    zoomLevel.value = `${Math.round(zoom * 100)}%`;
    zoomLevel.textContent = `${Math.round(zoom * 100)}%`;
  }

  function fitImage() {
    const horizontalPadding = window.innerWidth <= 700 ? 24 : 56;
    const verticalPadding = window.innerWidth <= 700 ? 82 : 84;
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const availableWidth = window.innerWidth - horizontalPadding;
    const availableHeight = window.innerHeight - verticalPadding;
    fittedWidth = Math.min(image.naturalWidth, availableWidth, availableHeight * imageRatio);
    updateZoom(1);
  }

  function openImage(source) {
    image.src = source.src;
    image.alt = `Enlarged: ${source.alt}`;
    wireframeLightbox.showModal();
    if (image.complete && image.naturalWidth) fitImage();
    else image.addEventListener("load", fitImage, { once: true });
  }

  wireframeTrigger.addEventListener("click", () => openImage(wireframeTrigger.querySelector("img")));
  document.querySelectorAll(".moey-screen-zoom-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => openImage(trigger.querySelector("img")));
  });
  closeButton.addEventListener("click", () => wireframeLightbox.close());
  wireframeLightbox.querySelector(".wireframe-zoom-in").addEventListener("click", () => updateZoom(zoom + 0.25));
  wireframeLightbox.querySelector(".wireframe-zoom-out").addEventListener("click", () => updateZoom(zoom - 0.25));
  wireframeLightbox.querySelector(".wireframe-zoom-reset").addEventListener("click", () => {
    stage.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    updateZoom(1);
  });
  wireframeLightbox.addEventListener("keydown", (event) => {
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      updateZoom(zoom + 0.25);
    } else if (event.key === "-") {
      event.preventDefault();
      updateZoom(zoom - 0.25);
    } else if (event.key === "0") {
      event.preventDefault();
      updateZoom(1);
    }
  });
  window.addEventListener("resize", () => {
    if (wireframeLightbox.open && zoom === 1) fitImage();
  });
  wireframeLightbox.addEventListener("click", (event) => {
    if (event.target === wireframeLightbox) wireframeLightbox.close();
  });
}

const sectionLinks = [...document.querySelectorAll(".case-toc a")];
const linkedSections = sectionLinks
  .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
  .filter(({ section }) => section);

function updateActiveSection() {
  const activationLine = window.innerWidth <= 700 ? 125 : 95;
  const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let activeSection = linkedSections[0];

  if (atPageBottom) {
    activeSection = linkedSections[linkedSections.length - 1];
  } else {
    linkedSections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= activationLine) activeSection = item;
    });
  }

  linkedSections.forEach(({ link, section }) => {
    link.classList.toggle("active", section === activeSection.section);
  });
}

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const section = document.getElementById(link.hash.slice(1));
    if (!section) return;
    event.preventDefault();
    history.pushState(null, "", link.hash);
    linkedSections.forEach(({ link: sectionLink }) => {
      sectionLink.classList.toggle("active", sectionLink === link);
    });
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();
