<template>
  <div class="q-pa-md">
    <q-table
      :columns="tableCols"
      :rows="tableData"
      selection="single"
      title="Sample"
      row-key="name"
    >
      <template #loading> Loading content...</template>
    </q-table>
    <p>Value of update col is {{ showUpdateCol }}</p>
    <p>Value of delete col is {{ showDeleteCol }}</p>
  </div>
</template>

<script setup lang="ts">
import { tableCols, tableData } from '../stores/dummy-store';

const props = defineProps({
  showUpdateCol: Boolean,
  showDeleteCol: Boolean,
});
</script>
