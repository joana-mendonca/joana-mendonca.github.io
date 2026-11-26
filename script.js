const panelButtons = document.querySelectorAll(".panel-toggle");
const showLayersButton = document.querySelector(".show-layers");

function setPanelHidden(isHidden) {
  document.body.classList.toggle("panel-hidden", isHidden);
  panelButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(isHidden));
    button.setAttribute("aria-label", isHidden ? "Show layers panel" : "Hide layers panel");
  });
}

panelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPanelHidden(!document.body.classList.contains("panel-hidden"));
  });
});
showLayersButton.addEventListener("click", () => setPanelHidden(false));

document.querySelectorAll(".tool").forEach((tool) => {
  tool.addEventListener("click", () => {
    document.querySelectorAll(".tool").forEach((button) => button.classList.remove("is-active"));
    tool.classList.add("is-active");
  });
});

const themeButton = document.querySelector(".theme-toggle");
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The theme still works for this page view when storage is unavailable.
  }
}

try {
  if (localStorage.getItem("portfolio-theme") === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeButton.setAttribute("aria-label", "Switch to light mode");
  }
} catch {
  // Use the default light theme when storage is unavailable.
}
themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const modes = {
  Researcher: {
    description: "I start with a real person, not a persona deck.",
    tags: ["User interviews", "Journey maps", "Useful questions"]
  },
  Systems: {
    description: "Thoughtful systems make the next good decision easier.",
    tags: ["Design systems", "Components", "Clear handoff"]
  },
  Visual: {
    description: "Type, spacing and colour doing quiet, useful work.",
    tags: ["Typography", "Art direction", "Details"]
  },
  Collaborator: {
    description: "The best work happens when the whole team is in it.",
    tags: ["Open feedback", "Product thinking", "Good energy"]
  },
  Development: {
    description: "I bring ideas to life by developing thoughtful, functional web apps.",
    tags: ["Web development", "Frontend", "Interactive experiences", "Technical collaboration"]
  }
};

const modeDescription = document.querySelector(".mode-description");
const modeTags = document.querySelector(".mode-tags");
document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".mode-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-on", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    const mode = modes[tab.dataset.mode];
    modeDescription.textContent = mode.description;
    modeTags.replaceChildren(...mode.tags.map((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      return chip;
    }));
  });
});

const experience = [
  {
    date: "2024 — NOW",
    title: "Software Development",
    company: "Santander and Vizrt",
    bullets: [
      "Built and improved user-focused digital products, combining frontend and full-stack development with UX/UI design across B2B and financial applications.",
      "Collaborated with cross-functional teams to translate business requirements into scalable, responsive, and production-ready solutions, from discovery to launch."
    ]
  },
  {
    date: "2023 — 2024",
    title: "UX & UI Design\n" +
        "Course",
    company: "EDIT. - Disruptive Digital Education",
    bullets: [
      "Developed skills in user research, wireframing, prototyping, and interface design, with a focus on creating intuitive and user-centered digital experiences.",
      "Collaborated with multidisciplinary teams on 4+ UX/UI design projects, applying user-centered design principles and strengthening teamwork and communication skills."
    ]
  },
  {
    date: "2022 — 2023",
    title: "Cloud DevOps Trainee",
    company: "Siemens",
    bullets: [
      "Developed serverless Azure Functions to automate data parsing, cleansing and preprocessing for analytics pipelines.",
      "Automated cloud infrastructure provisioning using Terraform and configured CI/CD pipelines to streamline cloud service deployments."
    ]
  },
  {
    date: "2018 — 2022",
    title: "Computer Science and Engineering",
    company: "Instituto Superior Técnico, Lisbon University",
    bullets: [
      "Developed a strong foundation in software development, algorithms, data structures and computer systems."
    ]
  }
];

let experienceIndex = 0;
const pageTabs = document.querySelectorAll(".diary-tab");
const previousButton = document.querySelector(".diary-prev");
const nextButton = document.querySelector(".diary-next");

function showExperience(index) {
  experienceIndex = (index + experience.length) % experience.length;
  const page = experience[experienceIndex];
  document.querySelector("#diary-date").textContent = page.date;
  document.querySelector("#diary-title").textContent = page.title;
  document.querySelector("#diary-company").textContent = page.company;
  document.querySelector("#diary-points").replaceChildren(...page.bullets.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
  document.querySelector(".diary-page-no").textContent = String(experienceIndex + 1).padStart(2, "0");
  pageTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === experienceIndex;
    tab.classList.toggle("is-on", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  previousButton.disabled = experienceIndex === 0;
  nextButton.disabled = experienceIndex === experience.length - 1;
}

pageTabs.forEach((tab, index) => tab.addEventListener("click", () => showExperience(index)));
previousButton.addEventListener("click", () => showExperience(experienceIndex - 1));
nextButton.addEventListener("click", () => showExperience(experienceIndex + 1));

const compare = document.querySelector(".compare-slider");
compare.addEventListener("input", () => {
  const split = `${compare.value}%`;
  compare.closest(".demo-window").style.setProperty("--split", split);
});

const sections = document.querySelectorAll(".frame[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".layer-list a[data-section]").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.section === entry.target.id);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}
