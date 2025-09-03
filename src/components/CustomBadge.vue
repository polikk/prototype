<template>
  <span :class="['custom-badge', colorClass]" :style="{ height: '24px', lineHeight: '24px' }">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'blue',
    validator: v => ['blue', 'yellow', 'green', 'default'].includes(v)
  }
})

const colorClass = {
  blue: 'badge-blue',
  yellow: 'badge-yellow',
  green: 'badge-green',
  default: 'badge-default'
}[props.type] || 'badge-default';
</script>

<style scoped>
.custom-badge {
  display: inline-block;
  min-width: 40px;
  padding: 0 12px;
  border-radius: 12px;
  color: #fff;
  font-size: 0.95em;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
}
.badge-blue {
  background: #2A7CC5;
}
.badge-yellow {
  background: #A56D13;
}
.badge-green {
  background: #108C22;
}
.badge-default {
  background: #888;
}
</style>
