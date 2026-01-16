const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));

document.querySelectorAll(".point").forEach(point => {
  point.addEventListener("click", () => {
    alert(`${point.innerText} occupies a different position in force, clarity, and contact time.`);
  });
});

document.querySelectorAll(".science-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
