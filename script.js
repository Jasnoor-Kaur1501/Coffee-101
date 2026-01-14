const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".point").forEach(point => {
  point.addEventListener("click", () => {
    alert(`${point.innerText} occupies a different position in force, clarity, and contact time.`);
  });
});


reveals.forEach(r => observer.observe(r));
