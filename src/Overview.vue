<template>
  <div class="d-flex" style="align-items: center; justify-content: center;">
    <div>
      <div class="bg-white d-flex align-items-center p-3 mb-3" style="border-radius: 8px;">
        <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="User photo" class="user-photo" style="width: 40px; height: 40px; border-radius: 32px;">
        <div class="ms-2">
          <p class="mb-0" style="color: black;"><strong>Philip Pedersen</strong></p>
          <p class="mb-0" style="color: black;">19.03.2015</p>
        </div>
      </div>
      <div class="alert alert-info p-2" role="alert">
        Du har ikke tilgang til å se alle opplysninger om brukeren. Ved behov, be om innsyn i den aktuelle saken.
      </div>
      <AccordionCustom />
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
