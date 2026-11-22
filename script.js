const loadBtn = document.getElementById('load-btn');
const output = document.getElementById('api-output');

loadBtn.addEventListener('click', async () => {
  output.style.display = 'block';
  output.textContent = 'Завантаження...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`HTTP помилка: ${response.status}`);
    }

    const data = await response.json();
    output.innerHTML = `<strong>Заголовок (ID ${data.id}):</strong> ${data.title}<br><p>${data.body}</p>`;
  } catch (error) {
    output.textContent = `Не вдалося отримати дані: ${error.message}`;
  }
});