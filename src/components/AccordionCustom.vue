<template>
  <div>
    <Accordion :multiple="true">
      <AccordionTab v-for="(nivaa, i) in data" :key="i">
        <template #header>
          <span>{{ nivaa.header }}</span>
          <CustomBadge type="blue" :style="{ marginLeft: '80%' }">Nivå</CustomBadge>
        </template>
        <Accordion :multiple="true">
          <AccordionTab v-for="(mal, j) in nivaa.subsections" :key="j">
            <template #header>
              <span>{{ mal.header }}</span>
              <CustomBadge type="yellow" :style="{ marginLeft: '80%' }">Mål</CustomBadge>
            </template>
            <Accordion :multiple="true">
              <AccordionTab v-for="(tiltak, tiltakIdx) in mal.subsubsections" :key="tiltakIdx">
                <template #header>
                  <span>{{ tiltak.header }}</span>
                  <CustomBadge type="green" :style="{ marginLeft: '80%' }">Tiltak</CustomBadge>
                </template>
                <DataTable :value="tiltak.table">
                  <Column field="col1">
                    <template #body="{ data, index }">
                      <span v-if="editRow !== `${i}-${j}-${k}-${index}-col1`">{{ data.col1 }}</span>
                    </template>
                  </Column>
                  <Column field="col2">
                    <template #body="{ data, index }">
                      <div class="col2-flex-row">
                        <span v-if="editRow !== `${i}-${j}-${k}-${index}-col2`">{{ data.col2 }}</span>
                        <input v-else v-model="tiltak.table[index].col2" @blur="editRow = null" :disabled="disabled" />
                        <IconButton
                          @click="editRow = `${i}-${j}-${k}-${index}-col2`"
                          :disabled="disabled"
                        >
                          <VectorIcon />
                        </IconButton>
                      </div>
                    </template>
                  </Column>
                </DataTable>
                <div style="margin: 16px 0 24px 0;">
                  <div class="suptitel">Kommentarer {{ tiltak.messages.length }}</div>
                  <div v-for="(msg, idx) in tiltak.messages" :key="idx">
                    <MessageCard
                      :title="msg.title"
                      v-model:message="msg.message"
                      :author="msg.author"
                      :date="msg.date"
                      :photoUrl="msg.photoUrl"
                      :disabled="disabled"
                    />
                  </div>
                  <!-- Show button, then input after click -->
                  <div  style="margin-top: 16px; display: flex; gap: 8px; align-items: center;">
                    <input v-model="tiltak.newComment" placeholder="Legg til kommentar..." style="flex: 1;" :disabled="disabled" />
                    <IconButton @click="addCommentToTiltak(tiltak, j, tiltakIdx)" :disabled="disabled">
                      <AddCommentIcon />
                      <span style="margin-left:6px;font-size:0.98em;color:#387F93;">Legg til</span>
                    </IconButton>
                  </div>
                  <div v-if="tiltak.comments && tiltak.comments.length" style="margin-top: 4px;">
                    <div v-for="(comment, cIdx) in tiltak.comments" :key="cIdx" style="font-size: 0.95em; color: #555; margin-left: 8px;">
                      • {{ comment }}
                    </div>
                  </div>
                  <FileUploadList v-model:files="tiltak.files" :disabled="disabled" />
                </div>
              </AccordionTab>
            </Accordion>
          </AccordionTab>
        </Accordion>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import CustomBadge from './CustomBadge.vue';
import AddCommentIcon from './AddCommentIcon.vue';
import IconButton from './IconButton.vue';
import { accordionData } from '../mock/accordionData';
import MessageCard from './MessageCard.vue';
import FileUploadList from './FileUploadList.vue';
import { useAccordionStore } from '../stores/accordionStore.mjs';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});

const editRow = ref(null);
const accordionStore = useAccordionStore();
const data = ref(accordionStore.accordionData.length ? accordionStore.accordionData : accordionData);

// Sync Pinia store with local data on mount
watch(
  data,
  (val) => {
    accordionStore.setAccordionData(val);
  },
  { deep: true }
);

// In setup, create an object for each tiltak toggle
const showCommentInputs = ref({});
watch(data, (val) => {
  // Reset object for each mal/tiltak
  showCommentInputs.value = {};
  val.forEach((nivaa, i) => {
    nivaa.subsections.forEach((mal, j) => {
      if (!showCommentInputs.value[j]) showCommentInputs.value[j] = {};
      mal.subsubsections.forEach((tiltak, tiltakIdx) => {
        showCommentInputs.value[j][tiltakIdx] = false;
      });
    });
  });
}, { immediate: true });

function getRandomPhotoUrl() {
  const photos = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/women/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/women/8.jpg',
  ];
  return photos[Math.floor(Math.random() * photos.length)];
}

function addCommentToTiltak(tiltak, malIdx, tiltakIdx) {
  if (!tiltak.newComment || !tiltak.newComment.trim()) return;
  if (!tiltak.messages) tiltak.messages = [];
  tiltak.messages.push({
    title: 'Ny kommentar',
    message: tiltak.newComment.trim(),
    author: 'Bruker', // You can replace with actual user
    date: new Date().toLocaleDateString('no-NO') + ' ' + new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
    photoUrl: getRandomPhotoUrl(),
  });
  tiltak.newComment = '';
  showCommentInputs.value[malIdx][tiltakIdx] = false;
}
function toggleCommentInput(malIdx, tiltakIdx) {
  showCommentInputs.value[malIdx][tiltakIdx] = !showCommentInputs.value[malIdx][tiltakIdx];
}
</script>

<style>
.suptitel{
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 30px;
}
.p-accordion .p-accordion-header .p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
  border: 1.5px solid #387F93;
  border-radius: 8px;
}
.p-accordion .p-accordion-content {
  border: 1.5px solid #387F93;
  border-radius: 8px;
  margin-bottom: 8px;
}
.p-accordion .p-accordion-header {
  border-radius: 8px;
}
.p-badge {
  margin-left : 80% !important;
}

.p-row-even{
    background: #9DC2CC1F!important;
    border: none;
    td {
        padding:5px 20px!important;
        border: none!important;
        height: 20px!important;
    }
}
.p-row-odd{
    td {
        padding:5px 20px!important;
        border: none!important;
        height: 20px!important;
    }
    background: #9DC2CC1F!important;
    border: none;
}
.p-datatable-header-cell {
    display: none;
}
.col2-flex-row {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
