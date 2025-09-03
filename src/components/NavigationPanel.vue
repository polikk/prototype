<template>
  <nav class="nav-panel">
    <ul>
      <li v-for="item in items" :key="item.label" :class="{ active: item.active }" @click="select(item)">
        <span v-if="item.icon" class="nav-icon"><component :is="item.icon" /></span>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
const emit = defineEmits(['select']);

function select(item) {
  emit('select', item);
}
</script>

<style scoped>
.nav-panel {
  width: 220px;
  background: #f7fafb;
  border-right: 1.5px solid #387F93;
  min-height: 100vh;
  padding: 0;
  box-shadow: 2px 0 8px #387f931a;
}
.nav-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-panel li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  cursor: pointer;
  font-size: 1.08em;
  color: #387F93;
  transition: background 0.2s, color 0.2s;
}
.nav-panel li.active, .nav-panel li:hover {
  background: #e6f3f7;
  color: #1a4e5d;
}
.nav-icon {
  font-size: 1.2em;
  display: flex;
  align-items: center;
}
</style>
