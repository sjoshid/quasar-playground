<template>
  <RootLayout>
    <template #content>
      <div class="q-pa-sm">
        <q-layout view="lhh Lpr lff">
          <q-header elevated>
            <q-toolbar style="min-height: 30px">
              <q-space></q-space>

              <q-btn stretch flat label="User"></q-btn>
              <q-separator dark vertical></q-separator>
              <q-btn stretch flat label="Admin"></q-btn>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <router-view />
          </q-page-container>
        </q-layout>
      </div>
    </template>
  </RootLayout>
</template>

<script setup lang="ts">
import RootLayout from '../layouts/RootLayout.vue';
</script>
