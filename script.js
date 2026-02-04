const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));

document.querySelectorAll(".science-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
    // Interactive brew sections
document.querySelectorAll(".brew-section").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active-section");
  });
});

  // Method map focus
document.querySelectorAll(".map-point").forEach(point => {
  point.addEventListener("click", () => {
    const name = point.innerText.toLowerCase();

    document.querySelectorAll(".brew-section").forEach(sec => {
      sec.classList.remove("focused");
    });

    document.querySelectorAll(".brew-section h2").forEach(h2 => {
      if (h2.innerText.toLowerCase().includes(name)) {
        h2.parentElement.classList.add("focused");
        h2.parentElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
});

  });
});
