<template>
  <top-nav :pageHeading="`Oversikt`"></top-nav>
  <navigation-panel></navigation-panel>
  <main>
    <div style="padding-top: 32px; padding-bottom: 32px; padding-left: 48px; padding-right: 48px; min-height: calc(100vh - 60px);" class="bg-light">
      <router-view />
    </div>
  </main>
</template>
 
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup>
import TopNav from "./components/topNav.vue";
import NavigationPanel from "./components/NavigationPanel.vue";
</script>
