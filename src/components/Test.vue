<script>
export default {
  data() {
    return {
      searchQuery: "", // Переменная для поиска
      sortByField: "name", // Поле для сортировки (по умолчанию "name")
      sortOrder: 1, // Порядок сортировки: 1 для возрастания, -1 для убывания
      selectedFile: null, // Выбранный файл (тест)
      files: [
        {
          name: "Банковская безопасность и защита данных ",
          date: "23.11.2024",
          isPassed: true,
          correctPercentage: 85,
          attempts: 3,
        },
        {
          name: "Работа с корпоративными клиентами ",
          date: "29.11.2024",
          isPassed: false,
          correctPercentage: 0,
          attempts: 1,
        },
        {
          name: "Операции с ипотечными кредитами ",
          date: "01.12.2024",
          isPassed: true,
          correctPercentage: 92,
          attempts: 2,
        },
        {
          name: "Оценка и работа с рисками инвестиций ",
          date: "10.12.2024",
          isPassed: true,
          correctPercentage: 78,
          attempts: 4,
        },
      ],
    };
  },
  computed: {
    // Фильтруем файлы по имени
    filteredFiles() {
      return this.files
          .filter((file) =>
              file.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .sort((a, b) => {
            // Сортируем по указанному полю
            if (a[this.sortByField] > b[this.sortByField]) {
              return this.sortOrder;
            } else if (a[this.sortByField] < b[this.sortByField]) {
              return -this.sortOrder;
            }
            return 0;
          });
    },
  },
  methods: {
    // Меняем поле и порядок сортировки
    sortBy(field) {
      if (this.sortByField === field) {
        this.sortOrder *= -1; // Меняем порядок сортировки
      } else {
        this.sortByField = field; // Устанавливаем новое поле сортировки
        this.sortOrder = 1; // По умолчанию сортировка по возрастанию
      }
    },
    // Обработчик для выбора теста
    selectTest(file) {
      // Если выбран тот же тест, снимаем выделение
      if (this.selectedFile === file) {
        this.selectedFile = null;
      } else {
        this.selectedFile = file;
      }
    },
  },
};
</script>

<template>
  <div class="file-list">
    <h2 class="file-list-title">Список тестов</h2>

    <!-- Поле для поиска -->
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Поиск по имени..."
        class="search-bar"
    />

    <!-- Кнопки сортировки -->
    <div class="sort-buttons">
      <button @click="sortBy('name')">Сортировать по имени</button>
      <button @click="sortBy('date')">Сортировать по дате</button>
    </div>

    <!-- Список файлов -->
    <ul class="file-items">
      <li
          v-for="file in filteredFiles"
          :key="file.name"
          class="file-item"
          @click="selectTest(file)"
      >
        <i class="pi pi-file" /> <!-- Иконка файла -->
        <div>
          <span class="file-name">{{ file.name }}</span>
          <small class="file-info">({{ file.date }})</small>
        </div>

        <!-- Информация о выбранном тесте (отображается только если выбран тест) -->
        <div v-if="selectedFile === file" class="test-details">
          <p><strong>Статус:</strong> {{ file.isPassed ? 'Пройден' : 'Не пройден' }}</p>
          <p><strong>Процент правильных ответов:</strong> {{ file.correctPercentage }}%</p>
          <p><strong>Количество попыток:</strong> {{ file.attempts }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Стили для контейнера списка */
.file-list {
  padding: 20px;
  background-color: #1c2d3a; /* Тёмный фон */
  border-radius: 8px;
  max-width: 400px;
  margin: 20px auto;
  
}

/* Заголовок списка */
.file-list-title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 15px;
  color: white; /* Белый текст */
}

/* Поле поиска */
.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none; /* Убираем рамку */
  border-radius: 5px;
  font-size: 1rem;
}

/* Кнопки сортировки */
.sort-buttons {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.sort-buttons button {
  background-color: #294b64;
  color: white;
  border: none; /* Убираем рамку у кнопок */
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  flex-grow: 1;
  margin: 0 5px;
  text-align: center;
}

.sort-buttons button:hover {
  background-color: #5da2d3;
}

/* Убираем маркеры и отступы у списка */
.file-items {
  list-style-type: none; /* Убираем стандартные маркеры */
  padding: 0;
  margin: 0;
}

/* Стили для элементов списка */
.file-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0; /* Отступы между элементами */
  color: white; /* Белый текст */
  background: none; /* Убираем фон */
  border-bottom: 1px solid #444; /*разделитель*/
  cursor: pointer;
  /* Добавляем отступ между тестами */
}

.file-item:hover {
  color: lightgray; /* Светло-серый текст при наведении */
}

/* Иконка файла */
.pi-file {
  font-size: 1.5rem;
  color: white; /* Белая иконка */
}

/* Название файла */
.file-name {
  margin-left: 10px;
  font-size: 1.1rem;
}

/* Дополнительная информация о файле */
.file-info {
  font-size: 0.9rem;
  color: lightgray;
}

/* Информация о тесте */
.test-details {
  margin-top: 10px;
  color: lightgray;
}

.test-details p {
  margin: 5px 0;
  font-size: 0.9rem;
}
</style>
