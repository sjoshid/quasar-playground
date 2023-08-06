<template>
  <q-page padding>
    <h1>Following is a grid using GridStack</h1>
    <div class="grid-stack">
      <div v-for="w in widgets" :key="w.id" class="grid-stack-item">
        <div class="grid-stack-item-content">
          <button @click="remove(w)">remove</button>
          {{ w }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GridStack } from 'gridstack';

let grid = null;
interface IWidgetInfo {
  x: number;
  y: number;
  w: number;
  h: number;
  id: number;
}

let widgets = ref<IWidgetInfo[]>([
  {
    x: 1,
    y: 0,
    w: 0,
    h: 0,
    id: 0,
  },
]);

onMounted(() => {
  console.log('the component is now mounted. ');
  grid = GridStack.init({
    // DO NOT user grid.value = GridStack.init(), see above
    float: false,
    cellHeight: '70px',
    minRow: 1,
  });
});

const makeChange = () => {
  widgets.value.push({
    x: 3,
    y: 0,
    w: 0,
    h: 0,
    id: 0,
  });
  console.log('items are', widgets.value);
};

const remove = (w: IWidgetInfo) => {
  console.log('Removing widget', w);
  widgets.value.shift();
};
</script>
