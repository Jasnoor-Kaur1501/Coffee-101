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
    // Brew simulator logic
const grind = document.getElementById("grind");
const time = document.getElementById("time");
const result = document.getElementById("brew-result");

function updateBrew() {
  if (!grind || !time) return;

  if (grind.value == 1 && time.value == 1)
    result.innerText = "Under-extracted. Sour and thin.";
  else if (grind.value == 3 && time.value == 3)
    result.innerText = "Over-extracted. Bitter and dry.";
  else
    result.innerText = "Balanced extraction. Sweet and clear.";
}

grind?.addEventListener("input", updateBrew);
time?.addEventListener("input", updateBrew);

    // Learning progress tracker
let visited = JSON.parse(localStorage.getItem("brewnotes-progress")) || 0;

document.querySelectorAll(".brew-section").forEach(sec => {
  sec.addEventListener("click", () => {
    visited++;
    localStorage.setItem("brewnotes-progress", visited);
  });
});

    const progressText = document.getElementById("progress-text");
if (progressText) {
  progressText.innerText = `You’ve explored ${visited} concepts so far.`;
}


  });
});
