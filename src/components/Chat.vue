<template>
    <div class="chat-container">
      <div class="messages">
        <div v-for="message in messages" :key="message.id" class="message" :class="{'user-message': message.isUser, 'bot-message': !message.isUser}">
          {{ message.text }}
        </div>
      </div>
      <div class="input-container">
        <input
          type="text"
          v-model="newMessage"
          @keyup.enter="sendMessage"
          class="input"
          placeholder="Сообщение..."
        />
        <button @click="sendMessage" class="send-button">
          <i class="pi pi-send"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: '',
        messageId: 0 // Для уникальных идентификаторов сообщений
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim()) {
          // Сохраняем сообщение пользователя
          this.messages.push({ id: this.messageId++, text: this.newMessage, isUser: true });
          this.newMessage = '';
  
          // Отправляем ответ
          setTimeout(() => {
            this.messages.push({ id: this.messageId++, text: 'Отправлено', isUser: false });
          }, 500); // Имитация задержки перед ответом
        }
      },
    },
  };
  </script>
  
  <style> 
 
  .chat-container { 
  background-color: #2A3F4F; 
  color: white; 
  border-radius: 8px; 
  display: flex; 
  flex-direction: column; 
  height: 100vh;
  width: 300px;
} 
   
  .messages { 
    flex: 1; /* Позволяет занимать все доступное пространство */ 
    background-color:#1c2d3a; /* #2A3F4F; */
    padding: 10px; 
    border-radius: 8px; 
    max-height: 740px; 
    overflow-y: auto; /* Позволяет прокручивать сообщения */ 
    margin-bottom: 10px;
  } 
   
  .message { 
    margin: 5px 0; 
    padding: 10px; 
    border-radius: 8px; 
    max-width: 70%; /* Ограничение ширины сообщений */ 
  } 
   
  .user-message { 
    background-color: #009688; /* Цвет для сообщений пользователя */ 
    color: white; 
    margin-left: auto; /* Выравнивание вправо */ 
    font-size: medium; 
  } 
   
  .bot-message { 
    background-color: #3A4F5F; /* Цвет для ответов бота */ 
    color: white; 
    margin-right: auto; /* Выравнивание влево */ 
    font-size: medium; 
  } 
   
  .input-container { 
    display: flex;
  } 
  
  .input { 
    flex: 1; 
    padding: 10px; 
    border: none; 
    height: 50px; 
    border-radius: 5px; 
    margin-right: 10px; 
    background-color: #1c2d3a; /* Цвет фона поля ввода */ 
    color: white; /* Цвет текста в поле */ 
  } 
   
  .send-button { 
    background-color: #1c2d3a; 
    color: white; 
    border: none; 
    width: 50px; 
    border-radius: 5px; 
    height: 50px;
    cursor: pointer; 
  } 
   
  .send-button:hover { 
    background-color: #5da2d3; 
  } 
 
  .send-button:active { 
    background-color: #295574; 
  } 
  </style>