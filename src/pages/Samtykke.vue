<template>
  <div class="d-flex samtykke" style="align-items: center; justify-content: center;">
    <div class="samt">
    <div style="flex-grow: 2;">
      <div class="bg-white d-flex align-items-center p-3 mb-3" style="border-radius: 8px;">
        <img src="/images/User1.png" alt="User photo" class="user-photo" style="width: 40px; height: 40px; border-radius: 32px;">
        <div class="ms-2">
          <p class="mb-0" style="color: black;"><strong>Philip Pedersen</strong></p>
          <p class="mb-0" style="color: black;">19.03.2015</p>
        </div>
      </div>
      <template v-for="status in statusOrder" :key="status">
          <h2 class="status-title">Samtykke {{ status }}</h2>
          <samtykke-card v-for="(item, idx) in grouped[status]" :key="item.Fil + idx" :value="item" />
          <div v-if="grouped[status].length === 0" class="empty-status">Ingen samtykker med status "{{ status }}".</div>
        </template>
    </div>
    <div class="w-25 ms-3" style="min-height: -webkit-fill-available; flex-grow: 1;">
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Send inn nytt samtykke</p>
        <div class="alert alert-info p-2 mb-0" role="alert">
          Du har ingen endringer som gjør at du behøver å sende inn nytt samtykke.
        </div>
      </div>
      <div class="bg-white p-3 mb-4" style="border-radius: 8px;">
        <p class="mb-3" style="color: black;">Innvolverte i saken</p>
        <p class="mb-2" style="color: black;">Venter på godkjenning</p>
        <div class="ms-2 mb-3 d-flex">
          <div>
            <p class="me-2 mb-0" style="color: black;"><strong>Rolle</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Navn</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Lagt til</strong></p>
          </div>
          <div>
            <p class="mb-0" style="color: black;">Ansatt barnevernet</p>
            <p class="mb-0" style="color: black;">Heidi Håkonsen</p>
            <p class="mb-0" style="color: black;">20.05.2025</p>
          </div>
        </div>
        <p class="mb-2" style="color: black;">Avklart samtykke</p>
        <div class="ms-2 mb-3 d-flex">
          <div>
            <p class="me-2 mb-0" style="color: black;"><strong>Rolle</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Navn</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Lagt til</strong></p>
          </div>
          <div>
            <p class="mb-0" style="color: black;">Koordinator</p>
            <p class="mb-0" style="color: black;">Morten Mortensen</p>
            <p class="mb-0" style="color: black;">20.05.2025</p>
          </div>
        </div>
        <div class="ms-2 mb-3 d-flex">
          <div>
            <p class="me-2 mb-0" style="color: black;"><strong>Rolle</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Navn</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Lagt til</strong></p>
          </div>
          <div>
            <p class="mb-0" style="color: black;">Lærer</p>
            <p class="mb-0" style="color: black;">Lars Larsen</p>
            <p class="mb-0" style="color: black;">13.03.2023</p>
          </div>
        </div>
        <div class="ms-2 d-flex">
          <div>
            <p class="me-2 mb-0" style="color: black;"><strong>Rolle</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Navn</strong></p>
            <p class="me-2 mb-0" style="color: black;"><strong>Lagt til</strong></p>
          </div>
          <div>
            <p class="mb-0" style="color: black;">Fotballtrener</p>
            <p class="mb-0" style="color: black;">Lene Hansen</p>
            <p class="mb-0" style="color: black;">12.04.2024</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import SamtykkeCard from '../components/SamtykkeCard.vue';
import { samtykkeList, groupSamtykkeByStatus } from '../mock/samtykkeList.js';
import { computed } from 'vue';

const grouped = computed(() => groupSamtykkeByStatus(samtykkeList));
const statusOrder = computed(() => Object.keys(grouped.value));
</script>

<style scoped>
.samtykke{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.samt{
     display: flex;
    justify-content: center;
    align-items: center;
}
.samtykke-page {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px #387f931a;
  padding: 32px 24px;
}
h1 {
  color: #387F93;
  margin-bottom: 18px;
}
.status-title {
  color: #387F93;
  font-size: 1.3em;
  margin: 32px 0 12px 0;
  font-weight: bold;
}
.empty-status {
  color: #888;
  font-size: 1em;
  margin-bottom: 18px;
}
p {
  color: #444;
  font-size: 1.1em;
}
</style>
