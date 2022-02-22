<template>
  <div id="app">
    <BarraNavegacao />

    <router-view />
  </div>
</template>

<script>
import BarraNavegacao from "./components/BarraNavegacao.vue";

export default {
  name: "App",
  components: { BarraNavegacao },
};
</script>
