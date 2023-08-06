<template>
  <RootLayout>
    <template #content>
      <div class="q-pa-sm">
        <q-layout view="lhh Lpr lff">
          <q-header elevated>
            <div class="row">
              <q-toolbar class="col-8">
                <!-- User management -->
                <div class="q-pa-xs">
                  <q-btn-dropdown color="green" label="User">
                    <q-list>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Subscribe</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Groups</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
                <!-- Company management -->
                <div class="q-pa-xs">
                  <q-btn-dropdown color="green" label="Company">
                    <q-list>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Subscribe</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Acna Management</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>SponsoredBy Management</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
                <div class="q-pa-xs">
                  <q-input
                    v-model="search"
                    debounce="500"
                    filled
                    placeholder="Search"
                    dense
                    :autofocus="true"
                  >
                    <template #append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
              </q-toolbar>
              <q-toolbar class="col-4">
                <q-space></q-space>
                <q-tabs shrink stretch indicator-color="green">
                  <q-tab name="tab2" icon="home" label="Home" />
                </q-tabs>
              </q-toolbar>
            </div>
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
import { ref } from 'vue';

const search = ref('');
</script>
