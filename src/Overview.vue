<template>
  <div class="d-flex" style="align-items: center; justify-content: center;">
    <div>
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <div class="d-flex mb-3">
          <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="User photo" class="user-photo" style="width: 80px; height: 80px; border-radius: 64px;">
          <div>
            <p class="ms-2 mb-2" style="color: black;"><strong>Philip Pedersen</strong></p>
            <div class="ms-2 d-flex">
              <div>
                <p class="me-2 mb-0" style="color: black;"><strong>Født</strong></p>
                <p class="me-2 mb-0" style="color: black;"><strong>Adresse</strong></p>
                <p class="me-2 mb-0" style="color: black;"><strong>Sted</strong></p>
              </div>
              <div>
                <p class="mb-0" style="color: black;">19.03.2015</p>
                <p class="mb-0" style="color: black;">Gateadresse 01</p>
                <p class="mb-0" style="color: black;">6500 Kristiansund</p>
              </div>
            </div>
          </div>
        </div>
        <p class="mb-0" style="color: black;"><strong>Første aktivitet registrert 13.11.2023</strong></p>
        <p class="mb-0" style="color: black;">Bruker er glad i xxxx, har noen utfordringer med xxxx. Bor til vanlig sammen med xxx, som har 80% omsorg.</p>
        <p class="mb-0" style="color: black;">Beskrives av lærer som xxxxxx og xxxxxx. Trivsel på skolen oppsummeres som xxx.</p>
      </div>
      <AccordionCustom :disabled="true" />
    </div>
    <div class="w-25 ms-3" style="min-height: -webkit-fill-available;">
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Uleste beskjeder</p>
        <div class="bg-light px-3 py-2">
          <p class="mb-0" style="color: black;">12.05.25 kl. 14:30</p>
          <p class="mb-0" style="color: black;"><strong>Dette er en tittel på melding</strong></p>
        </div>
      </div>
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Kommende avtaler</p>
        <div class="bg-light px-3 py-2">
          <p class="mb-0" style="color: black;">26.05.25 kl. 13:00-15:00</p>
          <p class="mb-0" style="color: black;">Morten Mortensen</p>
        </div>
      </div>
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Koordinator</p>
        <div class="d-flex align-items-center">
          <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="User photo" class="user-photo" style="width: 40px; height: 40px; border-radius: 32px;">
          <div class="ms-2">
            <p class="mb-0" style="color: black;"><strong>Morten Mortensen</strong></p>
            <p class="mb-0" style="color: black;">Barnevernet</p>
          </div>
        </div>
      </div>
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Involverte parter</p>
        <ul class="mb-0">
          <li>Barnevern (Stafettholder)</li>
          <li>PPT</li>
          <li>Politi (ekstern)</li>
          <li>Trener (ekstern)</li>
        </ul>
      </div>
      <div class="bg-white p-3 mb-3" style="border-radius: 8px;">
        <p class="mb-2" style="color: black;">Samtykke</p>
        <p class="mb-0" style="color: black;">Samtykke gitt av Navn Navnesen og Navn Navnesen 23.04.2024. Registrert av Navn Navnesen.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AccordionCustom from './components/AccordionCustom.vue';
</script>
