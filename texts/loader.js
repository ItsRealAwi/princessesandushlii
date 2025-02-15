// Функція для завантаження текстових файлів
function loadTexts() {
    const container = document.getElementById('textContainer'); // Контейнер для текстів
    const totalTexts = 5; // Загальна кількість текстових файлів (наприклад, 5)

    for (let i = 1; i <= totalTexts; i++) {
        fetch(`${i}.txt`) // Шлях до текстових файлів
            .then(response => response.text())
            .then(text => {
                const paragraph = document.createElement('p');
                paragraph.textContent = text; // Вміст тексту
                container.appendChild(paragraph);
            })
            .catch(error => console.error('Error loading text:', error));
    }
}

// Викликаємо функцію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadTexts);
