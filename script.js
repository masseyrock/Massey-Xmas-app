// Passcode unlock for certain days
document.querySelectorAll('.day-card.locked').forEach(card => {
  card.addEventListener('click', () => {
    // already unlocked? do nothing
    if (card.classList.contains('unlocked')) return;

    const expected = card.dataset.passcode || '';
    const entered = prompt('Enter the passcode for this day:');

    if (entered === null) return; // user cancelled

    if (entered === expected) {
      card.classList.add('unlocked');
    } else {
      alert('Sorry, that passcode is incorrect.');
    }
  });
});
