/* ----------------------------
   Scroll reveal system
---------------------------- */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));


/* ----------------------------
   Science card interaction
---------------------------- */

document.querySelectorAll(".science-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


/* ----------------------------
   Interactive brew sections
---------------------------- */

let visited = JSON.parse(localStorage.getItem("brewnotes-progress")) || 0;

document.querySelectorAll(".brew-section").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active-section");
    visited++;
    localStorage.setItem("brewnotes-progress", visited);
    updateProgress();
  });
});


/* ----------------------------
   Method map → content focus
---------------------------- */

document.querySelectorAll(".map-point").forEach(point => {
  point.addEventListener("click", () => {
    const name = point.innerText.toLowerCase();

    document.querySelectorAll(".brew-section").forEach(sec => {
      sec.classList.remove("focused");
    });

    document.querySelectorAll(".brew-section h2").forEach(h2 => {
      if (h2.innerText.toLowerCase().includes(name)) {
        const section = h2.parentElement;
        section.classList.add("focused");
        section.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  });
});


/* ----------------------------
   Progress text
---------------------------- */

function updateProgress() {
  const progressText = document.getElementById("progress-text");
  if (progressText) {
    progressText.innerText = `You’ve explored ${visited} concepts so far.`;
  }
}

updateProgress();
