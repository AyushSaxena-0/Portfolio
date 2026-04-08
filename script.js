const year = document.querySelector("#year");
const copyButton = document.querySelector("[data-copy]");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const animatedSections = [...document.querySelectorAll("[data-animate]")];

year.textContent = new Date().getFullYear();

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.copy;
  const defaultLabel = "Copy email";

  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Email copied";
  } catch {
    copyButton.textContent = email;
  }

  window.setTimeout(() => {
    copyButton.textContent = defaultLabel;
  }, 1800);
});

const setActiveLink = () => {
  const currentSection = sections
    .filter((section) => section.getBoundingClientRect().top <= 140)
    .at(-1);

  navLinks.forEach((link) => {
    const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("active", Boolean(isActive));
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

animatedSections.forEach((section) => revealObserver.observe(section));
