const roles = [
  "Frontend Developer",
  "UI Designer",
  "Graphic Designer",
  "chill guy!",
];
const textElement = document.querySelector(".text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function type() {
  const currentRole = roles[roleIndex];
  textElement.textContent = isDeleting
    ? currentRole.slice(0, --charIndex)
    : currentRole.slice(0, ++charIndex);

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    speed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  } else {
    speed = isDeleting ? 50 : 100;
  }

  setTimeout(type, speed);
}

type();
