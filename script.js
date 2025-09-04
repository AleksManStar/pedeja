function toggleMenu() {
  document.getElementById('nav').classList.toggle('active');
}

// Переключение языков
const languageSwitcher = document.getElementById('languageSwitcher');
languageSwitcher.addEventListener('change', () => {
  const lang = languageSwitcher.value;
  fetch(lang + '.json')
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
      });
    });
});

// Валидация формы
document.getElementById('requestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const contact = document.getElementById('contact').value;
  if (!contact.match(/^(\+?[0-9\s-]{7,}|[^@\s]+@[^@\s]+\.[^@\s]+)$/)) {
    alert('Введите корректный email или телефон');
    return;
  }
  alert('Спасибо! Ваша заявка отправлена.');
  this.reset();
});
