<template>
  <div class="message-card">
    <img :src="photoUrl" alt="User photo" class="user-photo" />
    <div class="message-content">
      <div class="message-header">
        <span class="message-meta">{{ date }} by {{ author }}</span>
      </div>
      <div class="message-body">
        <template v-if="!isEditing">
          {{ message }}
          <IconButton v-if="!props.disabled" @click="startEdit" :customStyle="{ marginLeft: '8px' }">
            <VectorIcon />
          </IconButton>
        </template>
        <template v-else>
          <input v-model="editedMessage" class="edit-input" />
          <IconButton v-if="!props.disabled" @click="saveEdit" :customStyle="{ marginLeft: '8px' }">
            <VectorIcon />
          </IconButton>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import IconButton from './IconButton.vue';
import VectorIcon from './VectorIcon.vue';

const props = defineProps({
  title: String,
  author: String,
  date: String,
  photoUrl: String,
  disabled: Boolean
})
const message = defineModel('message');

const isEditing = ref(false);
const editedMessage = ref(message.value);

watch(message, (val) => {
  editedMessage.value = val;
});

function startEdit() {
  isEditing.value = true;
}
function saveEdit() {
  message.value = editedMessage.value;
  isEditing.value = false;
}
</script>

<style scoped>
.message-card {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  background: #9DC2CC1F;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.user-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
}
.message-content {
  flex: 1;
}
.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.message-title {
  font-weight: bold;
  font-size: 1rem;
}
.message-meta {
  font-size: 0.8rem;
  color: #888;
}
.message-body {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.edit-btn {
  margin-left: 8px;
  border-radius: 50%;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  padding: 4px 8px;
}
.edit-input {
  margin-right: 8px;
  padding: 2px 6px;
  font-size: 0.95rem;
}
.save-btn {
  border-radius: 50%;
  border: none;
  background: #d0ffd0;
  cursor: pointer;
  padding: 4px 8px;
}
</style>
