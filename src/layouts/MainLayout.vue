<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-icon name="inventory_2" size="2rem"></q-icon>

        <q-toolbar-title> Connection Inventory </q-toolbar-title>

        <q-toggle
          v-model="$q.dark.mode"
          color="green"
          @click="$q.dark.toggle()"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
