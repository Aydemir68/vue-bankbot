<template>
  <div class="user-profile flex justify-content-start">
    <!-- Блок с фото профиля и кнопкой -->
    <div class="profile-container">
      <img class="profile-photo" :src="user.photoUrl" alt="Фото профиля" />
      <!-- Кнопка редактирования профиля под фото -->
      <div class="edit-profile">
        <button @click="editProfile">Редактировать профиль</button>
      </div>
    </div>

    <!-- Информация о пользователе -->
    <div class="user-info">
      <p><strong>ФИО:</strong> {{ user.fullName }}</p>
      <p><strong>Имя пользователя:</strong> {{ user.userName }}</p>
      <p><strong>Возраст:</strong> {{ user.age }}</p>
      <p><strong>Регион:</strong> {{ user.region }}</p>
    </div>
  </div>

  <!-- Выпадающий список для выбора категории -->
  <div class="dropdown">
    <select v-model="selectedCategory" id="category">
      <option value="events">Запланированные мероприятия</option>
      <option value="statistics">Статистика тестов</option>
      <option value="topics">Темы для изучения</option>
    </select>
  </div>

  <!-- Контент в зависимости от выбранной категории -->
  <div v-if="selectedCategory === 'events'" class="events">
    <ul>
      <li>15.12.2024 - Вебинар по финансовой грамотности</li>
      <li>20.12.2024 - Совещание с командой</li>
      <li>25.12.2024 - Подведение итогов года</li>
    </ul>
  </div>

  <div v-if="selectedCategory === 'statistics'" class="statistics">
    <p>Завершено тестов: 10</p>
    <p>Средний балл: 85%</p>
    <p>Ожидаемые результаты: 90%</p>
  </div>

  <div v-if="selectedCategory === 'topics'" class="topics">
    <ul>
      <li>1. Основы финансов</li>
      <li>2. Экономика и анализ</li>
      <li>3. Управление временем</li>
      <li>4. Основы маркетинга</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullName: 'Иванов Иван Иванович',
        userName: 'ivanov123',
        age: 30,
        region: 'Москва',
        photoUrl: 'https://via.placeholder.com/100' // Ссылка на фото профиля
      },
      selectedCategory: 'events' // Начальная выбранная категория
    };
  },
  methods: {
    editProfile() {
      // Логика редактирования профиля
      console.log("Редактировать профиль");
    }
  }
};
</script>
<style scoped>
/* Устанавливаем один шрифт для всей страницы */
* {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.user-profile {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px; /* Ограничиваем ширину */
  background-color: #2a3f4f; /* Темный фон */
  color: white; /* Белый текст */
  flex-wrap: wrap; /* Для адаптивности */
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрируем фото и кнопку */
  margin-right: 20px; /* Отступ между фото и информацией */
  margin-bottom: 20px; /* Отступ снизу для маленьких экранов */
}

.profile-photo {
  border-radius: 50%;
  width: 80px; /* Уменьшаем размер фото */
  height: 80px; /* Уменьшаем размер фото */
}

.edit-profile {
  margin-top: 10px;
}

.edit-profile button {
  padding: 8px 16px; /* Уменьшаем отступы на кнопке */
  background-color: #1c2d3a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px; /* Уменьшаем размер шрифта */
}

.edit-profile button:hover {
  background-color: #0d1a23;
}

.user-info {
  flex: 1;
  font-size: 18px; /* Уменьшаем размер текста */
  line-height: 1.4;
  max-width: 300px; /* Ограничиваем ширину блока с текстом */
}

h3 {
  font-size: 16px; /* Уменьшаем размер шрифта для заголовков */
  margin-bottom: 10px;
}

.events, .statistics, .topics {
  margin-top: 20px;
  padding: 10px;
  background-color: #334c61;
  border-radius: 8px;
  color: white;
  font-size: 14px; /* Уменьшаем размер текста */
}

.events ul, .topics ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.events li, .topics li {
  font-size: 12px; /* Уменьшаем размер шрифта для списка мероприятий */
  word-wrap: break-word;
  margin-bottom: 8px;
}

.dropdown {
  margin-top: 20px;
  color: white;
}

select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #1c2d3a;
  color: white;
  font-size: 14px;
}

select option {
  background-color: #2a3f4f;
  color: white;
}

@media (max-width: 768px) {
  .user-profile {
    flex-direction: column; /* Размещение элементов в колонку на маленьких экранах */
    align-items: center;
  }

  .profile-container {
    margin-right: 0;
  }

  .user-info {
    text-align: center; /* Центрируем текст на маленьких экранах */
  }
}
</style>