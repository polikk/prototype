<template>
  <div class="file-upload-list">
    <ul>
      <li v-for="(fileObj, idx) in files" :key="idx">
        <div>
             <div class="file-description">{{ fileObj.description }}</div>
        <div class="flex">
          <span>{{ fileObj.file.name }}</span>
          <span class="file-size">({{ formatSize(fileObj.file.size) }})</span>
          <button @click="removeFile(idx)" class="remove-btn">🗑️</button>
        </div>
        </div>
       
        
      </li>
    </ul>
    <input type="file" multiple @change="handleFiles" style="margin-top:12px;" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const files = ref([]);

function handleFiles(event) {
  const selected = Array.from(event.target.files);
  selected.forEach(file => {
    // Auto-generate title from file name (without extension)
    const nameParts = file.name.split('.');
    let title = nameParts.length > 1 ? nameParts.slice(0, -1).join('.') : file.name;
    // Auto-generate description
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const description = `Opprettet av Ive Iversen, ${day}.${month}.${year}, klokken ${hours}:${minutes}`;
    files.value.push({ file, title, description });
  });
  event.target.value = '';
}

function removeFile(idx) {
  files.value.splice(idx, 1);
}

function formatSize(size) {
  if (size < 1024) return size + ' B';
  if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB';
  return (size / (1024 * 1024)).toFixed(1) + ' MB';
}
</script>

<style scoped>
.flex{
    display: flex;
    align-items: center;
}
.file-upload-list {
  margin: 16px 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
  .file-size {
    margin-left: 8px;
    color: #888;
    font-size: 0.9em;
  }
  .remove-btn {
    margin-left: 12px;
    border: none;
    background: #ffe0e0;
    border-radius: 4px;
    cursor: pointer;
    padding: 2px 8px;
  }
  .file-title-input {
    padding: 2px 8px;
    font-size: 0.95em;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .file-title {
    font-weight: bold;
  }
  .file-description {
    color: #666;
    font-size: 0.9em;
  }
</style>
