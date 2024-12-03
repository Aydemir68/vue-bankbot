<template>
  <div class="quiz-container">
    <div v-if="currentQuestionIndex < questions.length">
      <h2>{{ questions[currentQuestionIndex].question }}</h2>
      <div class="answers">
        <div
            v-for="(answer, index) in questions[currentQuestionIndex].answers"
            :key="index"
            class="answer"
        >
          <input
              type="radio"
              :id="'answer-' + index"
              :name="'question-' + currentQuestionIndex"
              :value="answer"
              v-model="selectedAnswers[currentQuestionIndex]"
          />
          <label :for="'answer-' + index">{{ answer }}</label>
        </div>
      </div>
    </div>

    <div v-else>
      <h2>Тест завершен!</h2>
      <p>Ваши ответы:</p>
      <ul>
        <li v-for="(answer, index) in selectedAnswers" :key="index">
          {{ questions[index].question }}: {{ answer }}
        </li>
      </ul>
    </div>

    <div class="button-container">
      <div class="button-group">
        <button
            class="custom-button flex-button"
            @click="goBack"
            :disabled="currentQuestionIndex === 0"
        >
          Назад
        </button>
        <button
            class="custom-button flex-button"
            @click="goNext"
        >
          {{ currentQuestionIndex === questions.length - 1 ? "Завершить" : "Вперед" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswers: [],
      questions: [
        {
          question: "Какой язык программирования используется в браузере?",
          answers: ["JavaScript", "Python", "C++", "Java"],
        },
        {
          question: "Какой фреймворк работает с Vue.js?",
          answers: ["React", "Angular", "Nuxt.js", "Django"],
        },
        {
          question: "Что такое HTML?",
          answers: [
            "Язык разметки",
            "Язык программирования",
            "СУБД",
            "Операционная система",
          ],
        },
      ],
    };
  },
  methods: {
    goNext() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        console.log("Тест завершен!");
      }
    },
    goBack() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
};
</script>

<style>
.quiz-container {
  width: 60vw;
  max-width: 800px; /* Максимальная ширина 800px */
  min-width: 400px; /* Минимальная ширина 400px */
  height: 50vh; /* Высота 50% от высоты экрана */
  margin: 0 auto; /* Центрируем форму по горизонтали */
  padding: 20px;
  display: flex; /* Центрирование содержимого внутри формы */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2a3f4f; /* Цвет фона формы */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Легкая тень для эстетики */
  border-radius: 8px; /* Закругленные углы */
  box-sizing: border-box;
}

h2 {
  font-size: 1.25rem; /* Уменьшаем размер заголовка */
  margin-bottom: 20px;
  color: #fff; /* Цвет текста */
  text-align: center;
}

.answers {
  margin: 20px 0;
  text-align: center; /* Центрируем текст */
}

.answer {
  margin-bottom: 10px;
}

input[type="radio"] {
  margin-right: 10px;
}

label {
  color: #fff; /* Цвет текста для ответов */
}

/* Стили для кнопок */
.button-container {
  display: flex;
  justify-content: center; /* Центрируем кнопки по горизонтали */
  gap: 16px; /* Добавляем расстояние между кнопками */
  margin-top: 20px; /* Отступ от содержимого формы */
  width: 100%; /* Подгоняем контейнер под ширину формы */
}

.custom-button {
  background-color: #1b2934;
  color: rgba(228, 228, 228, 0.865);
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.custom-button:hover {
  background-color: #172026;
  color: #d3e9f9;
}

.custom-button:focus {
  outline: none;
  box-shadow: none;
}


</style>
