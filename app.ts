// Selecting the button and the skills section
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Adding an event listener for the toggle button
toggleButton.addEventListener('click', () => {
  // Check if the skills section is currently visible
  if (skillsSection.style.display === 'none') {
    // If hidden, show it
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    // If visible, hide it
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});
