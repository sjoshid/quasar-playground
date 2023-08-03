<template>
  <q-layout view="lhh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Oculus</q-toolbar-title>

        <q-toggle
          v-model="$q.dark.mode"
          color="green"
          @click="$q.dark.toggle()"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
        Company Info
    </q-footer>

    <q-page-container>
      <slot name="content"></slot>
    </q-page-container>
  </q-layout>
</template>
