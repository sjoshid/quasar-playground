<template>
  <RootLayoutComponent>
    <template #content>
      <p>Navbar for ADMIN contents</p>
      <router-view />
    </template>
  </RootLayoutComponent>
</template>

<script setup lang="ts">
import RootLayoutComponent from '../components/RootLayoutComponent.vue';
</script>
