// Get all checkboxes and reset button
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resetBtn = document.getElementById('reset-button');

// Load saved state from localStorage
window.onload = () => {
  checkboxes.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    if (saved === 'true') {
      cb.checked = true;
    }
  });
};

// Save checkbox state on change
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    localStorage.setItem(cb.id, cb.checked);
  });
});

// Reset all checkboxes
resetBtn.addEventListener('click', () => {
  checkboxes.forEach(cb => {
    cb.checked = false;
    localStorage.setItem(cb.id, false);
  });
});
