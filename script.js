// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Smooth Scrolling
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Brew Simulator Logic
const coffeeSlider = document.getElementById('coffee-slider');
const ratioSlider = document.getElementById('ratio-slider');

if (coffeeSlider && ratioSlider) {
    const coffeeVal = document.getElementById('coffee-val');
    const ratioVal = document.getElementById('ratio-val');
    const totalYield = document.getElementById('total-yield');
    const strengthTag = document.getElementById('strength-tag');

    function updateSimulation() {
        const coffee = parseFloat(coffeeSlider.value);
        const ratio = parseFloat(ratioSlider.value);
        const yield = Math.round(coffee * ratio);

        coffeeVal.textContent = coffee;
        ratioVal.textContent = ratio;
        totalYield.textContent = yield;

        if (ratio < 15) {
            strengthTag.textContent = "Strength: Bold & Intense";
        } else if (ratio > 17) {
            strengthTag.textContent = "Strength: Light & Tea-like";
        } else {
            strengthTag.textContent = "Strength: Balanced & Sweet";
        }
    }

    coffeeSlider.addEventListener('input', updateSimulation);
    ratioSlider.addEventListener('input', updateSimulation);
}

// Accordion Toggle
function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close others
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
    }
}
