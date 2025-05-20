<script lang="ts" setup>
import JobCard from './components/JobCard.vue';
import NavBar from './components/NavBar.vue';
import SearchField from './components/SearchField.vue';
import { data } from './data';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <SearchField :on-search="(val) => console.log(val)" />
    <div class="job-list">
      <JobCard v-for="(job, index) in data" :key="index" :job="job" />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>