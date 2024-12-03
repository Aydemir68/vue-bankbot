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
  <div class="text-gray-100">
    <div class="flex flex-column h-full">
      <RouterView />
    </div>
    <div class="flex justify-content-center align-items-end">
      <div v-for="i in items" :key="i">
        <RouterLink :to="i.link" class="">
          <span :class="i.icon" />
          <span class="ml-2">{{ i.label }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
