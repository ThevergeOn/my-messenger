<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md h-3/4">
      <div class="text-lg font-medium mb-4">{{ chat.name }}</div>
      <div class="flex flex-col justify-between">
        <div v-for="message in chat.messages" :key="message.id" class="mb-4 pl-2">
          <div class="text-gray-600 ">{{ message.text }}</div>
          <div class="text-gray-600 text-xs">{{ message.sender }}</div>
        </div>
        <div class="mb-4 flex gap-4">
          <input v-model="message" class="p-2 rounded-lg border outline-none" placeholder="Type a message...">
          <button @click="sendMessage" class="bg-blue-500 p-2 rounded-lg text-white w-20">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chat: {},
      message: ''
    }
  },
  created() {
    // make a mock request for chat data
    this.chat = {
      id: this.$route.params.chatId,
      name: 'John Doe',
      messages: [
        { id: 1, text: 'Hey, how\'s it going?', sender: 'John Doe' },
        { id: 2, text: 'I\'m good, thanks for asking.', sender: 'You' },
        { id: 3, text: 'What are you up to?', sender: 'John Doe' }
      ]
    }
  },
  methods: {
    sendMessage() {
      // add the message to the chat and reset the message input
      this.chat.messages.push({ id: Date.now(), text: this.message, sender: 'You' })
      this.message = ''
    }
  }
}
</script>