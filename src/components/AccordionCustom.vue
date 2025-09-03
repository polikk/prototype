<template>
  <div>
    <Accordion>
      <AccordionTab v-for="(nivaa, i) in data" :key="i">
        <template #header>
          <span>{{ nivaa.header }}</span>
  <CustomBadge type="blue" :style="{ marginLeft: '80%' }">Nivå</CustomBadge>
        </template>
        <Accordion>
          <AccordionTab v-for="(mal, j) in nivaa.subsections" :key="j">
            <template #header>
              <span>{{ mal.header }}</span>
  <CustomBadge type="yellow" :style="{ marginLeft: '80%' }">Mål</CustomBadge>
            </template>
            <Accordion>
              <AccordionTab v-for="(tiltak, k) in mal.subsubsections" :key="k">
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
                        <input v-else v-model="tiltak.table[index].col2" @blur="editRow = null" />
                        <IconButton
                          @click="editRow = `${i}-${j}-${k}-${index}-col2`"
                        >
                          <VectorIcon />
                        </IconButton>
                      </div>
                    </template>
                  </Column>
                </DataTable>
                <div style="margin: 16px 0 24px 0;">
                  <MessageCard
                    v-for="(msg, idx) in tiltak.messages"
                    :key="idx"
                    :title="msg.title"
                    v-model:message="msg.message"
                    :author="msg.author"
                    :date="msg.date"
                    :photoUrl="msg.photoUrl"
                  />
                  <FileUploadList v-model:files="tiltak.files" />
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
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import CustomBadge from './CustomBadge.vue';
import VectorIcon from './VectorIcon.vue';
import IconButton from './IconButton.vue';
import { accordionData } from '../mock/accordionData';
import MessageCard from './MessageCard.vue';
import FileUploadList from './FileUploadList.vue';

const editRow = ref(null);
const data = ref(accordionData);

// messageList removed; now using messages from accordionData
</script>

<style >
.p-accordion .p-accordion-header .p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
}
.p-accordion .p-accordion-header .p-accordion-toggle-icon {
  margin-right: auto;
  margin-left: 0 !important;
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
