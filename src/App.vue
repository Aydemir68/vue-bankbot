<script>
import Menu from "./components/Menu.vue";
import AutoComplete from 'primevue/autocomplete';
import instance from "./Api/instance.js";
import Test from "./components/Test.vue";
import Profile from "./components/Profile.vue";
export default {
  components: {
    Menu,
    AutoComplete,
    Profile,
    Test
  },
  data() {
    return {
      activeTab: "home", // Вкладка по умолчанию
      userData: null
    };
  },
  methods: {
    post_data: function ()
    {
      let tg = window.Telegram.WebApp;
      instance.post("user/auth", null, {params: {init_data: tg.initData}}).then(res => {
        this.userData = res.data;
      }).catch(err => {
        this.userData = null;
      });
      console.log(tg.initData)
    },
    updateTab(newTab) {
      this.activeTab = newTab; // Обновляем вкладку

    },
  },
  beforeMount(){
    this.post_data()
  },
};

</script>

<template>

  <div class="flex h-screen w-full flex-col">

    <Menu :activeTab="activeTab" @update-tab="updateTab" />


    <div class="content-container">
      <div v-if="activeTab === 'home'" class="tab-content">
        <div v-if="userData !== null">
          Добро пожаловать, {{userData.username}}!
        </div>
        <div v-else>
           Выйди отсюда, розбийник!
        </div>

      </div>
      <div v-if="activeTab === 'help'" class="tab-content">
        Ссылка на тг-бота
      </div>
      <div v-if="activeTab === 'docs'" class="tab-content">
        <Test>

        </Test>
      </div>
      <div v-if="activeTab === 'profile'" class="tab-content">
        <Profile></Profile>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  flex: 1;
  padding: 20px;
  color: white;
}

.tab-content {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
}

</style>