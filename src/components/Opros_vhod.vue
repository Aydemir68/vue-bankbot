<template>
  <div class="survey-form">
    <h1>Финансовый навигатор. Завершающий опрос 2024</h1>
    <p>
      Уважаемый участник программы Финансовый навигатор! Поздравляем вас с
      окончанием обучения по программе! Оцените свой уровень финансовой
      грамотности и сравните результаты до и после обучения. Помните – это не
      экзамен: вместе с вами мы оцениваем программу. Опрос проводится анонимно и
      занимает не более 10 минут.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="region">* В каком регионе вы проживаете?</label>
        <select id="region" v-model="region" required>
          <option disabled value="">-</option>
          <option>Регион 1</option>
          <option>Регион 2</option>
          <option>Регион 3</option>
        </select>
      </div>

      <div class="form-group">
        <label>* Ваш пол</label>
        <div>
          <input type="radio" id="male" value="Мужской" v-model="gender" required>
          <label for="male">Мужской</label>
        </div>
        <div>
          <input type="radio" id="female" value="Женский" v-model="gender" required>
          <label for="female">Женский</label>
        </div>
      </div>

      <div class="form-group">
        <label>* Ваш возраст (полных лет)</label>
        <div>
          <input type="radio" id="age1" value="18-29" v-model="age" required>
          <label for="age1">18-29</label>
        </div>
        <div>
          <input type="radio" id="age2" value="30-49" v-model="age" required>
          <label for="age2">30-49</label>
        </div>
        <div>
          <input type="radio" id="age3" value="50-59" v-model="age" required>
          <label for="age3">50-59</label>
        </div>
        <div>
          <input type="radio" id="age4" value="60+" v-model="age" required>
          <label for="age4">60+</label>
        </div>
      </div>

      <button type="submit" class="submit-button">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: '',
      gender: '',
      age: '',
  pros: ['name']
    };
  },
  methods: {
    submitForm() {
      console.log('Регион:', this.region);
      console.log('Пол:', this.gender);
      console.log('Возраст:', this.age);
      alert('Форма успешно отправлена!');
    },
  },
};
</script>

<style scoped>
.survey-form {
  max-width: 100%;
  margin-top: 2vh;
  padding: 20px;
  border-radius: 8px;
  background-color: #1c2d3a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 90vh;
  color: white;
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
}

h1 {
  font-size: 2.4vh;
  margin-bottom: 2vh;
}

p {
  font-size: 1.8vh;
  margin-bottom: 1.4vh;
}

.form-group {
  margin-bottom: 1.6vh;
}

label {
  display: block;
  margin-bottom: 1.2vh;
  font-weight: bold;
}

input[type='radio'],
select {
  margin-top: 1px;
}




.submit-button {
  background-color: #294b64;
  color: white;
  border: none; /* Убираем рамку у кнопок */
  padding: 1.2vh;
  border-radius: 5px;
  font-size: 2vh;
  /*flex-grow: 1;*/
  margin: 0 1vh;
  align-items: center;
}

.submit-button:hover {
  background-color: #5da2d3;
}
</style>
