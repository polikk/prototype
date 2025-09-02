<template>
  <div>
    <h1>About Page</h1>
    <card-custom v-for="user in mockUsers" :key="user.name">
      <template #title>{{ user.name }}</template>
      <template #content>
        <p>This app is designed to help users manage their tasks efficiently.</p>
      </template>
    </card-custom>
  </div>
</template>

<script setup>
import CardCustom from './components/CardCustom.vue';
import { mockUsers } from './mock/users';
</script>
