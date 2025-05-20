<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
import SearchField from './components/SearchField.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <SearchField :on-search="(val) => console.log(val)" />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>