<template>
  <div class="samtykke-card">
    <div class="card-header">
      <span class="status" :class="statusClass">{{ value.Status }}</span>
    </div>
    <div class="card-body">
        <div class="rowtable ">
            <strong>Fil</strong> <span class="file-name">{{ value.Fil }}</span></div>
        <div class="rowtable">
            <strong>Sendt dato:</strong> <span>{{ value['Sendt dato'] }}</span></div>
        <div class="rowtable"
        ><strong>Sendt av:</strong><span> {{ value['Sendt av'] }}</span></div>
        <div class="rowtable">
            <strong>Sendt til:</strong><span> {{ value['Sendt til'] }}</span></div>
        <div class="rowtable">
            <strong>Signert:</strong> <span> {{ value.Signert || '–' }}</span></div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
  value: {
    type: Object,
    required: true
  }
});
const statusClass = computed(() => {
  if (props.value.Status === 'Godkjent') return 'status-approved';
  if (props.value.Status === 'Avvist') return 'status-rejected';
  if (props.value.Status === 'Venter') return 'status-pending';
  return '';
});
</script>

<style scoped>
.samtykke-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #387f931a;
  padding: 18px 22px;
  margin-bottom: 18px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
  position: relative;
}
.file-name {
  font-weight: bold;
  color: #387F93;
  font-size: 1.08em;
}
.status {
  padding: 2px 12px;
  border-radius: 12px;
  font-size: 0.98em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  top: 12px;
}
.status-approved {
  background: #4caf50;
}
.status-rejected {
  background: #d32f2f;
}
.status-pending {
  background: #fbc02d;
  color: #333;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.rowtable {
  font-size: 1em;
  gap: 15px;
  display: flex;
  color: #444;
  strong{
    min-width: 120px;
  }
}
</style>
