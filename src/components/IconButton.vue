
<template>
  <button
    class="icon-btn"
    :style="customStyle"
    @click="$emit('click')"
    type="button"
  >
    <slot />
  </button>
</template>

<script setup>
// Emits click event, slot for icon
const props = defineProps({
  customStyle: {
    type: [String, Object],
    default: ''
  }
});
</script>

<style scoped>
.icon-btn {
  border-radius: 50%;
  margin-left: 8px;
  background: transparent;
  border: 2px solid transparent;
  color: #387F93;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}
.icon-btn:active {
  background: rgba(56,127,147,0.08);
}
</style>
