<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="text-lg font-medium mb-4">Chats</div>
      <div v-for="chat in chats" :key="chat.id"
        class="mb-4 flex items-center cursor-pointer p-2 rounded hover:bg-gray-50" @click="goToChat(chat.id)">
        <img :src="chat.avatar" class="w-12 h-12 rounded-full mr-4" />
        <div class="">
          <div class="text-xl font-medium">{{ chat.name }}</div>
          <div class="text-gray-600">{{ chat.lastMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: []
    }
  },
  created() {
    // make a mock request for chats data
    this.chats = [
      { id: 1, name: 'John Doe', lastMessage: 'Hey, how\'s it going?', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', },
      { id: 2, name: 'Jane Doe', lastMessage: 'I\'m good, thanks for asking.', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', },
      { id: 3, name: 'Bob', lastMessage: 'What are you up to?', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', }
    ]
  },
  methods: {
    goToChat(chatId) {
      // navigate to the chat page and pass the chatId as a parameter
      this.$router.push({ path: `/chat/${chatId}`, params: { chatId } })
    }
  }
}
</script>

