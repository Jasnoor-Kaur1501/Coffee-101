let espressoLevel = 0;
let milkLevel = 0;
let pouringType = null;
let intervalId = null;

const espressoLayer = document.getElementById('espresso-layer');
const milkLayer = document.getElementById('milk-layer');
const totalLabel = document.getElementById('total-level');
const statusLabel = document.getElementById('brew-status');
const weightLabel = document.getElementById('gram-weight');

const btnEspresso = document.getElementById('btn-espresso');
const btnMilk = document.getElementById('btn-milk');
const btnReset = document.getElementById('btn-reset');

function updateUI() {
    const total = espressoLevel + milkLevel;
    espressoLayer.style.height = `${espressoLevel}%`;
    milkLayer.style.height = `${milkLevel}%`;
    totalLabel.textContent = Math.round(total);
    weightLabel.textContent = Math.round(total * 2.5);

    if (total === 0) {
        statusLabel.textContent = "Ready for a brew?";
    } else if (espressoLevel > 0 && milkLevel === 0) {
        statusLabel.textContent = "Rich Espresso Base";
    } else if (espressoLevel > 0 && milkLevel > 10 && milkLevel < 40) {
        statusLabel.textContent = "The Perfect Cortado";
    } else if (espressoLevel > 0 && milkLevel >= 40 && milkLevel < 80) {
        statusLabel.textContent = "Creamy Flat White";
    } else if (espressoLevel > 0 && milkLevel >= 80) {
        statusLabel.textContent = "Caffè Latte";
    } else if (espressoLevel === 0 && milkLevel > 0) {
        statusLabel.textContent = "Just warm milk?";
    }
}

function startPouring(type) {
    if (espressoLevel + milkLevel >= 100) return;
    
    pouringType = type;
    intervalId = setInterval(() => {
        if (espressoLevel + milkLevel < 100) {
            if (pouringType === 'espresso') {
                espressoLevel += 1;
            } else if (pouringType === 'milk') {
                milkLevel += 1;
            }
            updateUI();
        } else {
            stopPouring();
        }
    }, 50);
}

function stopPouring() {
    clearInterval(intervalId);
    pouringType = null;
}

function resetCup() {
    espressoLevel = 0;
    milkLevel = 0;
    updateUI();
}

// Event Listeners
btnEspresso.addEventListener('mousedown', () => startPouring('espresso'));
btnEspresso.addEventListener('mouseup', stopPouring);
btnEspresso.addEventListener('mouseleave', stopPouring);
btnEspresso.addEventListener('touchstart', (e) => { e.preventDefault(); startPouring('espresso'); });
btnEspresso.addEventListener('touchend', stopPouring);

btnMilk.addEventListener('mousedown', () => startPouring('milk'));
btnMilk.addEventListener('mouseup', stopPouring);
btnMilk.addEventListener('mouseleave', stopPouring);
btnMilk.addEventListener('touchstart', (e) => { e.preventDefault(); startPouring('milk'); });
btnMilk.addEventListener('touchend', stopPouring);

btnReset.addEventListener('click', resetCup);
