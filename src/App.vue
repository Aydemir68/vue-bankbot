<script>
import Menu from "./components/Menu.vue";
import Profile from "./components/Profile.vue";
import Test from "./components/Test.vue";
import News from "./components/News.vue";
import Chat from "./components/Chat.vue";
export default {
  components: {
    Menu,
    Profile,
    Test,
    News,
    Chat
  },
  data() {
    return {
      activeTab: "news", // Вкладка по умолчанию
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
  <div class="flex h-screen w-full flex-col">
    <!-- Компонент Menu -->
    <Menu :activeTab="activeTab" @update-tab="updateTab" />

    <!-- Контент -->
    <div class="content-container">
      <div v-if="activeTab === 'news'" :key="activeTab" class="tab-content">
        <News/>
      </div>
      <div v-if="activeTab === 'help'" :key="activeTab" class="tab-content">
        <Chat/>
      </div>
      <div v-if="activeTab === 'docs'" :key="activeTab" class="tab-content">
        <Test/>
      </div>
      <div v-if="activeTab === 'profile'" :key="activeTab" class="tab-content">
        <Profile/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  flex: 1;
  padding: 20px;
}

.tab-content {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
}

div{
  background-color: #2A3F4F;
}
</style>
