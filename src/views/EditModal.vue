<template>
  <div class="modal-center ">
    <div class="fixed w-96  ">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form @submit.prevent="submitForm" class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Name</label>
            <input v-model="form.name" class="w-full p-2 rounded-lg" type="text">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input v-model="form.email" class="w-full p-2 rounded-lg" type="email">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Avatar</label>
            <input v-model="form.avatar" class="w-full p-2 rounded-lg" type="url">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Bio</label>
            <textarea v-model="form.bio" class="w-full p-2 rounded-lg" rows="5"></textarea>
          </div>
          <div class="flex items-center justify-end">
            <button @click="$emit('close')" class="text-red-500 hover:text-red-700">Cancel</button>
            <button type="submit" class="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: this.profile.name,
        email: this.profile.email,
        avatar: this.profile.avatar,
        bio: this.profile.bio
      }
    }
  },
  methods: {
    submitForm() {
      // emit the form data and close the modal
      this.$emit('submit', this.form)
      this.$emit('close')
    }

  }
}
</script>
<style>
.modal-center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
</style>
