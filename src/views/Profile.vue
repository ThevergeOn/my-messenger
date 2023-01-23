
<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4 flex flex-col gap-2">
        <img :src="profile.avatar" class="w-12 h-12 rounded-full mr-4 pl-1">
        <div class="text-xl font-medium pl-1">{{ profile.name }}</div>
        <div class="text-gray-600 pl-1">{{ profile.email }}</div>
        <div class="text-gray-600 pl-1">{{ profile.bio }}</div>
        <button @click="showEditModal = true"
          class="w-16 h-10 bg-blue-500 p-2 rounded-lg text-white self-start">Edit</button>
      </div>
    </div>
  </div>
  <EditModal v-if="showEditModal" @close="showEditModal = false" @submit="updateProfile" :profile="profile" />
</template>


<script>
import profileMock from '../mock-data';
import EditModal from './EditModal.vue';
export default {
  data() {
    return {
      profile: profileMock,
      showEditModal: false
    }
  },
  methods: {
    updateProfile(newData) {
      //update the profile object with the new data
      Object.assign(this.profile, newData)
    }
  },
  components: {
    EditModal
  }
}

</script>
