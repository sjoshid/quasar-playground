<template>
  <RootLayoutComponent>
    <template #content>
      <p>Navbar for user contents</p>
      <router-view />
    </template>
  </RootLayoutComponent>
</template>

<script setup lang="ts">
import RootLayoutComponent from '../components/RootLayoutComponent.vue';
</script>
