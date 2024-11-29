<script>
import Menu from "primevue/menu"
import Profile from "./components/Profile.vue";
import Test from "./components/Test.vue";
import News from "./components/News.vue";
import Chat from "./components/Chat.vue";
import Opros_vhod from "./components/Opros_vhod.vue";
export default {

  components: {
    Menu,
    Profile,
    Test,
    News,
    Chat,
    Opros_vhod
  },
  data() {
    return {
      items: [
        {
          label: 'Новости',
          icon: 'pi pi-home',
          link: '/news'
        },
        {
          label: 'ИИ',
          icon: 'pi pi-search',
          link: '/chat'
        },
        {
          label: 'Опросы',
          icon: 'pi pi-bolt',
          link: '/test'
        },
        {
          label: 'Профиль',
          icon: 'pi pi-user',
          link: '/user'
        },

      ]
    };
  },
  methods: {
  updateTab(newTab) {
    console.log("Смена вкладки на:", newTab); // Отладка
    this.activeTab = newTab;
  },
},
};
</script>

<template>
  <div class="app-container">
    <RouterView />
    <div class="content-container">
      <!-- Содержимое вкладок -->
    </div>
    <div class="menu-container">
      <div class="menu-items">
        <div v-for="i in items" :key="i">
          <RouterLink :to="i.link" class="menu-link">
            <span :class="i.icon" />
            <span class="ml-2">{{ i.label }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  flex: 1;
  overflow-y: auto;
}

.menu-container {
  background-color: #2A3F4F;
  padding: 10px;
}

.menu-items {
  display: flex;
  justify-content: space-around;
}

.menu-link {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
}

div{
  background-color: #2A3F4F;
}

html, body {
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center;    /* Центрирование по вертикали */
}
</style>
