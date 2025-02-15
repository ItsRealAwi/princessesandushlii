// Функція для завантаження всіх фото
function loadImages() {
    const container = document.getElementById('imageContainer'); // Контейнер для фото
    const totalImages = 10; // Загальна кількість фото (наприклад, 10)
    
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${i}.jpg`; // Шлях до фото
        img.alt = `Image ${i}`;
        img.width = 1280;  // Задайте потрібний розмір
        img.height = 927;
        
        container.appendChild(img);
    }
}

// Викликаємо функцію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadImages);
