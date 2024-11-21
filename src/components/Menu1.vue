<script>
import Toolbar from "primevue/toolbar";
import ButtonGroup from "primevue/buttongroup";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";

export default {
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  components: {
    ButtonGroup,
    Button,
    IconField,
    InputText,
    SplitButton,
  },
  methods: {
    selectTab(tab) {
      this.$emit("update-tab", tab); // Отправка события с ID выбранной вкладки
    },
  },
};
</script>

<template>
  <div>
    <!-- Кнопки -->
    <div class="button-container">
      <ButtonGroup class="button-group">
        <Button
            icon="pi pi-home"
            size="large"
            class="flex-button custom-button"
            :class="{ active: activeTab === 'home' }"
            @click="selectTab('home')"
        />
        <Button
            icon="pi pi-question"
            size="large"
            class="flex-button custom-button"
            :class="{ active: activeTab === 'help' }"
            @click="selectTab('help')"
        />
        <Button
            icon="pi pi-file-check"
            size="large"
            class="flex-button custom-button"
            :class="{ active: activeTab === 'docs' }"
            @click="selectTab('docs')"
        />
        <Button
            icon="pi pi-user"
            size="large"
            class="flex-button custom-button"
            :class="{ active: activeTab === 'profile' }"
            @click="selectTab('profile')"
        />
      </ButtonGroup>
    </div>
  </div>
</template>

<style scoped>

.button-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  /* Optional: background color for the button container */

  /* Optional: shadow for better visibility */
  justify-content: space-between;
}
.button-group {
  display: flex;
  width: 100%;
}

.flex-button {
  flex-grow: 1;
  justify-content: center;
  display: flex;
}
.custom-button {
  background-color: #2A3F4F		 !important; /* Зеленый фон */
  color: rgba(151, 151, 151, 0.86) !important; /* Белый текст */
  border: none !important; /* Без рамки */
}

.custom-button:hover {
  background-color: #2A3F4F	 !important;
  color: #d3e9f9	 !important;
  border: none !important;
}

.button-group {
  display: flex; /* Размещаем кнопки в строку */
  gap: 16px; /* Расстояние между кнопками */
  justify-content: center; /* Центрируем кнопки в группе */
}

.button-container {
  display: flex;
  flex-direction: column; /* Располагаем элементы вертикально */
  align-items: center; /* Центрируем подпись под кнопкой */
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-label {
  margin-top: 5px; /* Задайте необходимый отступ */
  font-size: 12px;
}


</style>
