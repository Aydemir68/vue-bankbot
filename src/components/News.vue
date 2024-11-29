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
    max-width: 100%;
    margin: 2vh auto;
    margin-top: 2vh;
    padding: 2.5vh;
    background-color: #1c2d3a; /* Тёмный фон */
    border-radius: 8px;
    color: white; /* Белый текст */
    font-family: Arial, sans-serif;
    height: 90vh;
    overflow-y: auto; /* Добавляем вертикальную прокрутку */
  }

  /* Заголовок новостного раздела */
  .news-title {
    font-size: 3.1vh;
    margin-bottom: 2vh;
    margin-top: 2vh;
    text-align: center;
  }

  /* Элемент одной новости */
  .news-item {
    margin-bottom: 2vh;
    border-bottom: 1px solid #444; /* Разделительная линия */
    padding-bottom: 2vh;
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
    max-width: 40vh; /* Ограничение максимального размера изображения */
    height: auto; /* Сохраняем пропорции изображения */
    border-radius: 8px;
    margin: 0 auto 2vh; /* Центровка и отступы */
    display: block; /* Для работы margin: auto */
  }

  /* Текст описания новости */
  .news-description {
    font-size: 2.1vh;
    color: #e6e6e6;
    margin-top: 1.2vh;
  }

  /* Добавляем стили для кнопки */
  .schedule-button {
    background-color: #294b64; /* Цвет фона кнопки */
    color: white; /* Цвет текста кнопки */
    border: none; /* Убираем рамку */
    border-radius: 5px; /* Закругленные края */
    padding: 1.2vh 2.6vh; /* Отступы */
    font-size: 2vh; /* Размер шрифта */
  }

  .schedule-button:hover {
    background-color: #5da2d3; /* Цвет фона при наведении */
    border: none;
  }
  </style>
