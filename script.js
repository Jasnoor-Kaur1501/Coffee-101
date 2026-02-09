// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));


// SCIENCE CARD TOGGLE
document.querySelectorAll(".science-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


// BREW SECTION CLICK = highlight
document.querySelectorAll(".brew-section").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active-section");
  });
});


// METHOD MAP CLICK → SCROLL TO SECTION
document.querySelectorAll(".map-point").forEach(point => {
  point.addEventListener("click", () => {
    const name = point.innerText.toLowerCase();

    document.querySelectorAll(".brew-section").forEach(sec => {
      sec.classList.remove("focused");
    });

    document.querySelectorAll(".brew-section h2").forEach(h2 => {
      if (h2.innerText.toLowerCase().includes(name)) {
        const parent = h2.parentElement;
        parent.classList.add("focused");
        parent.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
});


// BREW SIMULATOR (sliders)
const grind = document.getElementById("grind");
const time = document.getElementById("time");
const result = document.getElementById("brew-result");

function updateBrew() {
  if (!grind || !time || !result) return;

  const g = Number(grind.value);
  const t = Number(time.value);

  if (g <= 1 && t <= 1)
    result.innerText = "Under-extracted. Sour and thin.";
  else if (g >= 3 && t >= 3)
    result.innerText = "Over-extracted. Bitter and dry.";
  else
    result.innerText = "Balanced extraction. Sweet and clear.";
}

if (grind) grind.addEventListener("input", updateBrew);
if (time) time.addEventListener("input", updateBrew);


// PROGRESS TRACKER
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
