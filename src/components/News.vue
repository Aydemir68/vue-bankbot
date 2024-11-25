<template>
  <div class="news-list">
    <h1 class="news-title">Новости</h1>
    <div v-for="(news, index) in newsItems" :key="index" class="news-item">
      <div class="news-content">
        <h2 class="news-header">{{ news.title }}</h2>
        <img :src="news.image" :alt="news.title" class="news-image" />
        <p class="news-description">{{ news.description }}</p>
        <button class="schedule-button">Запланировать</button>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        // Список новостей
        newsItems: [
          {
            title: "Вебинар по финансовой грамотности",
            description: "15.12.2024 состоится вебинар по финансовой грамотности",
            image: "https://www.topol-eco.ru/upload/iblock/13f/635847974891062780-425303270_news.jpg", // Замените на путь к вашему изображению
          },
          {
            title: "Совещание с командой",
            description: "Совещание пройдет 20 декабря",
            image: "https://www.topol-eco.ru/upload/iblock/13f/635847974891062780-425303270_news.jpg",
          },
          // Добавьте больше новостей по необходимости
        ],
      };
    },
  };
  </script>

  <style scoped>
  /* Стили контейнера новостей */
  .news-list {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #1c2d3a; /* Тёмный фон */
    border-radius: 8px;
    color: white; /* Белый текст */
    font-family: Arial, sans-serif;
  }

  /* Заголовок новостного раздела */
  .news-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  /* Элемент одной новости */
  .news-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #444; /* Разделительная линия */
    padding-bottom: 15px;
  }

  /* Контейнер текста новости */
  .news-content {
    text-align: center; /* Центровка содержимого */
  }

  /* Заголовок новости */
  .news-header {
    font-size: 1.2rem;
    margin: 0 0 10px;
    color: #f8f9fa;
  }

  /* Изображение новости */
  .news-image {
    width: 100%;
    max-width: 400px; /* Ограничение максимального размера изображения */
    height: auto; /* Сохраняем пропорции изображения */
    border-radius: 8px;
    margin: 0 auto 15px; /* Центровка и отступы */
    display: block; /* Для работы margin: auto */
  }

  /* Текст описания новости */
  .news-description {
    font-size: 1rem;
    color: #ccc;
    margin-top: 10px;
  }

  /* Добавляем стили для кнопки */
  .schedule-button {
    background-color: #294b64; /* Цвет фона кнопки */
    color: white; /* Цвет текста кнопки */
    border: none; /* Убираем рамку */
    border-radius: 5px; /* Закругленные края */
    padding: 10px 20px; /* Отступы */
    font-size: 1rem; /* Размер шрифта */
    cursor: pointer; /* Указатель при наведении */
    transition: background-color 0.3s; /* Плавный переход цвета */
  }

  .schedule-button:hover {
    background-color: #5da2d3; /* Цвет фона при наведении */
    border: none;
  }
  </style>
