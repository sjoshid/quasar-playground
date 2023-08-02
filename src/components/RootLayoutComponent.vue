<template>
  <q-layout view="lHh Lpr lFf">
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

    <q-page-container>
      <slot name="content"></slot>
    </q-page-container>
  </q-layout>
</template>
