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
</style>
