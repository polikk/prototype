<template>
  <div class="file-upload-list" style="margin-top: 30px;">
    <ul>
      <li v-for="(fileObj, idx) in files" :key="idx" class="file-block">
        <span class="file-name-with-icon">
              <UploadIcon />
            </span>
        <div style="width: 100%;">
           
          <div class="flex space-wrapper">
            <div >
              <div>
                <span class="file-size">{{ fileObj.description }}</span>
              </div>
              <div>
                 <span class="file-size">({{ formatSize(fileObj.file.size) }}) &nbsp;&nbsp;</span>
                <span class="file-name-with-icon">{{ fileObj.file.name }}</span>
              </div>
            </div>
            
           
            <button @click="removeFile(idx)" class="remove-btn">
              <TrashIcon style="color: #D32F2F;" />
            </button>
          </div>
        </div>
      </li>
    </ul>
    <label style="display: flex; align-items: center; cursor: pointer; margin-top:12px;">
      <input ref="fileInput" type="file" @change="handleFiles" style="display: none;" />
      <IconButton v-if="!props.disabled" @click="triggerFileInput">
        <AddCommentIcon />
        <span style="margin-left:6px;font-size:0.98em;color:#387F93;">Nytt vedlegg</span>
      </IconButton>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const files = ref([]);
const fileInput = ref(null);
import IconButton from './IconButton.vue';
import AddCommentIcon from './AddCommentIcon.vue';
import UploadIcon from './UploadIcon.vue';
import TrashIcon from './TrashIcon.vue';

const props = defineProps({
  disabled: Boolean
})

function triggerFileInput() {
  if (fileInput.value) fileInput.value.click();
}

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
.space-wrapper {
  justify-content: space-between;
  width: 100%;
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
  width: 100%;
}
  .file-size {
    margin-left: 8px;
    color: #888;
    font-size: 0.95em;
  }
  .remove-btn {
    margin-left: 12px;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    padding: 2px 8px;
    font-size: 1em;
    display: flex;
    align-items: center;
  }
  .remove-btn .trash-icon svg {
    fill: #D32F2F;
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
    flex: 1 1 60%;
    color: #666;
    font-size: 0.95em;
    margin-bottom: 8px;
  }
  .file-name-with-icon {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    font-size: 1em;
  }
.file-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 16px;
  background: #9DC2CC1F;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
}
</style>
