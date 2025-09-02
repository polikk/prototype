<template>
  <button @click="toggleDarkMode">
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)


onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-p-color-scheme') === 'dark';
})

function toggleDarkMode() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute('data-p-color-scheme', isDark.value ? 'dark' : 'light');
}
</script>
