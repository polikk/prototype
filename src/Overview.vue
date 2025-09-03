<template>
  <div class="d-flex" style="align-items: center; justify-content: center;">
    <div style="align-self: self-start;">
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
        <p class="mb-2" style="color: black;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
          </svg>
          Koordinator</p>
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
