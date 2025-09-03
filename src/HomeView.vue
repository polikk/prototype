
<template>
  <div class="not-ready-container">
    <div class="not-ready-content">
      <span class="not-ready-emoji">😅</span>
      <h1 class="not-ready-title">Denne siden er ikke klar ennå</h1>
      <p class="not-ready-desc">Vi jobber med å gjøre denne siden tilgjengelig. Kom tilbake senere!</p>
    </div>
  </div>
</template>

<script setup>
// No logic needed for placeholder
</script>

<style scoped>
.not-ready-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: #f7fafc;
}
.not-ready-content {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #387f931a;
  padding: 48px 32px;
  text-align: center;
}
.not-ready-emoji {
  font-size: 3rem;
  display: block;
  margin-bottom: 16px;
}
.not-ready-title {
  color: #387F93;
  margin-bottom: 12px;
}
.not-ready-desc {
  color: #444;
  font-size: 1.15em;
}
</style>
