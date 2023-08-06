<template>
  <RootLayout>
    <template #content>
      <div class="q-pa-sm">
        <q-layout view="lhh Lpr lff">
          <q-header elevated>
            <q-toolbar style="min-height: 30px">
              <div class="row no-wrap justify-start items-start content-start">
                <div class="q-pa-xs">
                  <q-btn-dropdown color="green" label="Metrics">
                    <q-list>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Hotspot</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Time series</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>

                <div class="q-pa-xs">
                  <q-btn-dropdown color="green" label="Inventory">
                    <q-list>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Connection Inventory</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </div>
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
