<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto">
        <nav class="flex items-center justify-between p-4">
          <router-link class="text-lg font-medium text-blue-500" to="/">My Profile</router-link>
          <router-link class="text-lg font-medium text-blue-500" to="/chats">Chats</router-link>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* add your tailwind css classes here */
</style>
