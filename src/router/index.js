import Profile from "../views/Profile.vue";
import Chats from "../views/Chats.vue";
import Chat from "../views/Chat.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/chats",
      name: "Chats",
      component: Chats,
    },
    {
      path: "/chat/:id",
      name: "Chat",
      component: Chat,
    },
  ],
});
export default router;
