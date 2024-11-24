<template>
    <div>
      <div class="chat-box">
        <div v-for="msg in messages" :key="msg.id" class="message">
          <span>{{ msg.text }}</span>
        </div>
      </div>
      <form @submit.prevent="sendMessage">
        <input v-model="message" placeholder="Введите сообщение" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        messages: [], // Список сообщений
        message: "", // Текст текущего сообщения
      };
    },
    methods: {
      async sendMessage() {
        if (!this.message) return;
  
        try {
          const response = await axios.post("https://yourdomain.com/send-message", {
            message: this.message,
          });
  
          // Добавляем ответ от сервера в чат
          this.messages.push({ text: response.data.reply, id: Date.now() });
          this.message = "";
        } catch (error) {
          console.error("Ошибка отправки сообщения:", error);
        }
      },
    },
  };
  </script>
  
  <style>
  .chat-box {
    max-height: 400px;
    overflow-y: scroll;
  }
  .message {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  </style>
  