<template>
  <nav class="nav-panel" style="border-right: none;">
    <ul>
      <li v-for="item of navItems" :key="item.label" :class="{ active: $route.path === item.route, enabled: !item.isDisabled }">
        <component
          :is="item.isDisabled ? 'span' : 'router-link'"
          :to="item.route"
          class="nav-link"
        >
          <span v-if="item.icon" class="nav-icon"><component :is="item.icon" /></span>
          <span class="nav-label" :class="{ 'nav-label-enabled': !item.isDisabled }">{{ item.label }}</span>
        </component>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const navItems = [
  { label: 'Oversikt', route: '/overview' },
  { label: 'Mål og tiltak', route: '/contact' },
  { label: 'Meldinger', route: '/', isDisabled: true },
  { label: 'Avtaler', route: '/', isDisabled: true },
  { label: 'Tidslinje', route: '/', isDisabled: true },
  { label: 'Filer', route: '/', isDisabled: true },
  { label: 'Involverte parter', route: '/', isDisabled: true },
  { label: 'Referat', route: '/', isDisabled: true },
  { label: 'Samtykke', route: '/consent' },
  { label: 'Historikk', route: '/', isDisabled: true }
];


const emit = defineEmits(['select']);

function select(item) {
  emit('select', item);
}
</script>

<style scoped>
.nav-panel {
  display: flex;
  align-items: center;
    justify-content: center;
  background: #f7fafb;
  border-right: 1.5px solid #387F93;
  padding: 0;
  box-shadow: 2px 0 8px #387f931a;
}
.nav-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
.nav-panel li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  /* cursor: pointer; */
  font-size: 1.08em;
  color: #387F93;
  transition: background 0.2s, color 0.2s;
}
.nav-panel li.active, .nav-panel li.enabled, .nav-panel li.enabled:hover {
  background: #e6f3f7;
  color: #1a4e5d;
}
.nav-icon {
  font-size: 1.2em;
  display: flex;
  align-items: center;
}
.nav-label-enabled, .nav-panel li.enabled span {
  background: #e6f3f7 !important;
}
.nav-panel li.enabled:hover {
  height: 46px;
  border-bottom: 2px solid #141b4d;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
}
.nav-link.router-link-exact-active,
.nav-panel li.active .nav-link {
  background: #e6f3f7;
  color: #1a4e5d;
}
</style>
