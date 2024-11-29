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
        <label for="region" class="text-blue-300">* В каком регионе вы проживаете?</label>
        <select id="region" v-model="region" required>
          <option disabled value="">Москва</option>
          <option>Кабардино-Балкарская республика</option>
          <option>Санкт-Петербург</option>
        </select>
      </div>

      <div class="form-group">
        <label class="text-blue-300">* Ваш пол</label>
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
        <label class="text-blue-300">* Ваш возраст (полных лет)</label>
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

      <div class="form-group">
        <label class="text-blue-300">* Есть ли у вас профильное финансовое или экономическое образование?</label>
        <div>
          <input type="radio" id="age1" value="18-29" v-model="age" required>
          <label for="Yes">Да</label>
        </div>
        <div>
          <input type="radio" id="age2" value="30-49" v-model="age" required>
          <label for="No">Нет</label>
        </div>
      </div>


      <div class="form-group">
        <label class="text-blue-300">* Ваше семейное положение</label>
        <div>
          <input type="radio" id="single" value="Никогда не состоял(а) в браке" v-model="maritalStatus" required>
          <label for="single">Никогда не состоял(а) в браке</label>
        </div>
        <div>
          <input type="radio" id="married" value="Состою в зарегистрированном браке" v-model="maritalStatus" required>
          <label for="married">Состою в зарегистрированном браке</label>
        </div>
        <div>
          <input type="radio" id="civilUnion" value="Состою в незарегистрированном браке" v-model="maritalStatus" required>
          <label for="civilUnion">Состою в незарегистрированном браке</label>
        </div>
        <div>
          <input type="radio" id="widowed" value="Вдовец/вдова" v-model="maritalStatus" required>
          <label for="widowed">Вдовец/вдова</label>
        </div>
        <div>
          <input type="radio" id="divorced" value="Разведен(а)" v-model="maritalStatus" required>
          <label for="divorced">Разведен(а)</label>
        </div>
        <div>
          <input type="radio" id="other" value="Другое" v-model="maritalStatus" required>
          <label for="other">Другое</label>
        </div>
      </div>

      <div class="form-group">
        <label class="text-blue-300">* Как можно описать уровень дохода вашей семьи?</label>
        <div>
          <input type="radio" id="lowIncome" value="Денег не хватает даже на питание" v-model="income" required>
          <label for="lowIncome">Денег не хватает даже на питание</label>
        </div>
        <div>
          <input type="radio" id="foodOnly" value="На питание денег хватает, но не хватает на покупку одежды и обуви" v-model="income" required>
          <label for="foodOnly">На питание денег хватает, но не хватает на покупку одежды и обуви</label>
        </div>
        <div>
          <input type="radio" id="clothesOnly" value="На покупку одежды и обуви денег хватает, но не хватает на покупку крупной бытовой техники" v-model="income" required>
          <label for="clothesOnly">На покупку одежды и обуви денег хватает, но не хватает на покупку крупной бытовой техники</label>
        </div>
        <div>
          <input type="radio" id="appliances" value="Денег вполне хватает на покупку крупной бытовой техники без кредита, но мы не можем купить новую машину" v-model="income" required>
          <label for="appliances">Денег вполне хватает на покупку крупной бытовой техники без кредита, но мы не можем купить новую машину</label>
        </div>
        <div>
          <input type="radio" id="noBigPurchases" value="Денег хватает на всё, кроме таких дорогих приобретений, как квартира, дом" v-model="income" required>
          <label for="noBigPurchases">Денег хватает на всё, кроме таких дорогих приобретений, как квартира, дом</label>
        </div>
        <div>
          <input type="radio" id="noFinancialIssues" value="Материальных затруднений не испытываем, при необходимости могли бы приобрести квартиру, дом" v-model="income" required>
          <label for="noFinancialIssues">Материальных затруднений не испытываем, при необходимости могли бы приобрести квартиру, дом</label>
        </div>
        <div>
          <input type="radio" id="undecided" value="Затрудняюсь ответить" v-model="income" required>
          <label for="undecided">Затрудняюсь ответить</label>
        </div>
      </div>

      <div class="form-group">
      <label class="text-blue-300">* Принимали ли вы участие в мероприятиях, на которых рассказывали, как правильно распоряжаться деньгами в последние 6 месяцев?</label>
      <div>
        <input type="radio" id="attendedYes" value="Да" v-model="attended" required>
        <label for="attendedYes">Да</label>
      </div>
      <div>
        <input type="radio" id="attendedNo" value="Нет" v-model="attended" required>
        <label for="attendedNo">Нет</label>
      </div>
      <div>
        <input type="radio" id="attendedUndecided" value="Затрудняюсь ответить" v-model="attended" required>
        <label for="attendedUndecided">Затрудняюсь ответить</label>
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
