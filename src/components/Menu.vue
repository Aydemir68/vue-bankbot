<script>
import ButtonGroup from "primevue/buttongroup";
import Button from "primevue/button";
import Profile  from "./Profile.vue";
export default {
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
        },
        {
          label: 'Projects',
          icon: 'pi pi-search',
          badge: 3,
          items: [
            {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S',
            },
            {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B',
            },
            {
              separator: true,
            },
            {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U',
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectTab(tab) {
      this.$emit("update-tab", tab);
    },
  },
  components: {
    ButtonGroup,
    Button,
    Profile
  },
};
</script>

<template>
  <div class="button-container">
    <ButtonGroup class="button-group">
      <Button
          class="flex-button custom-button"
          :class="{ active: activeTab === 'help' }"
          @click="selectTab('news')"
      >
        <div class="button-content">
          <i class="pi pi-book"></i>
          <span class="button-label">Новости</span>
        </div>
      </Button>
      <Button
          class="flex-button custom-button"
          :class="{ active: activeTab === 'help' }"
          @click="selectTab('help')"
      >
        <div class="button-content">
          <i class="pi pi-question"></i>
          <span class="button-label">ИИ</span>
        </div>
      </Button>
      <Button
          class="flex-button custom-button"
          :class="{ active: activeTab === 'docs' }"
          @click="selectTab('docs')"
      >
        <div class="button-content">
          <i class="pi pi-file-check"></i>
          <span class="button-label">Опросы</span>
        </div>
      </Button>
      <Button
          class="flex-button custom-button"
          :class="{ active: activeTab === 'profile' }"
          @click="selectTab('profile')"
      >
        <div class="button-content">
          <i class="pi pi-user"></i>
          <span class="button-label">Профиль</span>
        </div>
      </Button>
    </ButtonGroup>
  </div>
</template>

<style>
.button-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; /* Располагаем элементы вертикально */
  align-items: center; /* Центрируем подпись под кнопкой */
  justify-content: center;
  width: 100%;
  padding: 10px;
}

.button-group {
  display: flex;
  gap: 16px; /* Расстояние между кнопками */
  justify-content: center; /* Центрируем кнопки в группе */
  width: 100%;
}

.flex-button {
  flex-grow: 1;
  justify-content: center;
  display: flex;
}

.custom-button {
    background-color: #2A3F4F !important;
  color: rgba(228, 228, 228, 0.865) !important;
  border: none !important;
}

.custom-button:hover {
  background-color: #2A3F4F !important;
  color: #d3e9f9 !important;
}

.button-content {
  display: flex;
  flex-direction: column;
}
.custom-button:focus {
  outline: none;
  box-shadow: none; /* Убирает возможную тень вокруг кнопки */
}

.button-label {
  margin-top: 5px;
  font-size: 12px;
}
</style>
