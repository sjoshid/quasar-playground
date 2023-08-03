<template>
  <RootLayout>
    <template #content>
      <p>Navbar for ADMIN contents</p>
      <router-view />
    </template>
  </RootLayout>
</template>

<script setup lang="ts">
import RootLayout from '../layouts/RootLayout.vue';
</script>
