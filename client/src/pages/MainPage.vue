<template>
  <div>
    <div class="menu">
      <n-tabs type="segment" animated>
        <n-tab-pane name="Группы" tab="Группы">
          <d-v-communities :communities :is-loading="isCommunitiesLoading" />
        </n-tab-pane>

        <n-tab-pane name="календарь" tab="Календарь">
          Я календарь переверну и снова 3-е сентября
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { CommunitiesApi } from '@/lib/api/communities/index.ts';

import DVCommunities from '@/components/communities/DVCommunities.vue';

const communities = ref([]);
const isCommunitiesLoading = ref(false);

async function getCommunities() {
  try {
    isCommunitiesLoading.value = true;

    const { data } = await CommunitiesApi.fetchCommunities();

    communities.value = data.data;
  } catch (error) {
    console.error(error);
  } finally {
    isCommunitiesLoading.value = false;
  }
}

onMounted(getCommunities);
</script>
