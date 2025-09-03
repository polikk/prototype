<template>
  <div class="d-flex" style="align-items: center; justify-content: center;">
    <div>
      <div class="bg-white d-flex align-items-center p-3 mb-3" style="border-radius: 8px;">
        <img src="/images/User1.png" alt="User photo" class="user-photo" style="width: 40px; height: 40px; border-radius: 32px;">
        <div class="ms-2">
          <p class="mb-0" style="color: black;"><strong>Per</strong></p>
          <p class="mb-0" style="color: black;">19.03.2017</p>
        </div>
      </div>
      <div class="alert alert-info p-2" role="alert">
        Du har ikke tilgang til å se alle opplysninger om brukeren. Ved behov, be om innsyn i den aktuelle saken.
      </div>
      <AccordionCustom />
    </div>
  </div>
</template>

<script setup>
import AccordionCustom from './components/AccordionCustom.vue';
</script>
