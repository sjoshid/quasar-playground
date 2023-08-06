<template>
  <q-page padding>
    <h1>Following is a grid using GridStack</h1>
    <button @click="makeChange()">Change</button>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface IPerson {
  fn: string;
  ln: string;
}

let o1 = ref<IPerson[]>([]);

onMounted(() => {
  console.log('the component is now mounted. ');
});

const makeChange = () => {
  console.log('items are', o1.value.push({ fn: 'Sujit', ln: 'Joshi' }));
};
</script>
