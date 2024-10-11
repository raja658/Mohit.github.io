<<<<<<< HEAD
// Get the current year and update the footer
window.addEventListener('load', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Existing alert code or other logic
    if (!localStorage.getItem('welcomeShown')) {
        alert("Welcome to my portfolio!");
        localStorage.setItem('welcomeShown', 'true'); // Set flag to true
    }
});

const canvas = document.getElementById('neuralNetworkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
}

Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.3) this.size -= 0.1;
};

Particle.prototype.draw = function() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function createParticles(e) {
    const xPos = e.x;
    const yPos = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.3) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', createParticles);
animate();

// Get the modal and website content elements
const modal = document.getElementById('purpose-modal');
const websiteContent = document.querySelector('.main-content');

// Show the modal on page load
window.addEventListener('load', () => {
  if (!localStorage.getItem('purposeVisited')) {
    modal.style.display = 'flex';
    websiteContent.classList.add('blurred');
  } else {
    websiteContent.style.display = 'block';
  }
});

// Handle the user's input
document.getElementById('submit-purpose').addEventListener('click', () => {
  const purposeInput = document.getElementById('purpose-input');
  const purpose = purposeInput.value.trim();
  const rememberMe = document.getElementById('remember-me').checked;

  if (purpose) {
    // Store the user's purpose in local storage
    localStorage.setItem('purpose', purpose);
    if (rememberMe) {
      localStorage.setItem('purposeVisited', 'true');
    }

    // Hide the modal and show website content
    modal.style.display = 'none';
    websiteContent.classList.remove('blurred');
  } else {
    alert('Please enter your purpose of visit!');
  }
=======
// Get the current year and update the footer
window.addEventListener('load', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Existing alert code or other logic
    if (!localStorage.getItem('welcomeShown')) {
        alert("Welcome to my portfolio!");
        localStorage.setItem('welcomeShown', 'true'); // Set flag to true
    }
});

const canvas = document.getElementById('neuralNetworkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
}

Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.3) this.size -= 0.1;
};

Particle.prototype.draw = function() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function createParticles(e) {
    const xPos = e.x;
    const yPos = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.3) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', createParticles);
animate();

// Get the modal and website content elements
const modal = document.getElementById('purpose-modal');
const websiteContent = document.querySelector('.main-content');

// Show the modal on page load
window.addEventListener('load', () => {
  if (!localStorage.getItem('purposeVisited')) {
    modal.style.display = 'flex';
    websiteContent.classList.add('blurred');
  } else {
    websiteContent.style.display = 'block';
  }
});

// Handle the user's input
document.getElementById('submit-purpose').addEventListener('click', () => {
  const purposeInput = document.getElementById('purpose-input');
  const purpose = purposeInput.value.trim();
  const rememberMe = document.getElementById('remember-me').checked;

  if (purpose) {
    // Store the user's purpose in local storage
    localStorage.setItem('purpose', purpose);
    if (rememberMe) {
      localStorage.setItem('purposeVisited', 'true');
    }

    // Hide the modal and show website content
    modal.style.display = 'none';
    websiteContent.classList.remove('blurred');
  } else {
    alert('Please enter your purpose of visit!');
  }
>>>>>>> 06c843245cca2dea26959471ce9bf65d86c093e7
});