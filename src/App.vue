<script setup lang="ts">
import Aside from './components/layout/Aside.vue';
import Header from './components/layout/Header.vue';

</script>

<template>
  <div class="w-full min-h-screen flex">
      <Aside />
      <div class="flex-1 min-w-0 flex flex-col">
        <Header />
        <RouterView />
      </div>
  </div>
</template>
