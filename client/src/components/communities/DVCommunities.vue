<template>
  <div>
    <template v-if="!isLoading">
      <add_pay :communities />

      <n-collapse
        v-for="community in communities" :key="community._id"
        v-model:expanded-names="show"
        accordion
      >
        <n-collapse-item :title="community.name" :name="community._id">
          <n-collapse
            v-for="child in community.children" :key="child._id"
            v-model:expanded-names="showChild"
            accordion
          >
            <n-collapse-item :title="`${child.lastName} ${child.firstName}`" :name="child._id">
              <n-collapse
                v-for="child in community.children" :key="child._id"
                v-model:expanded-names="showChild"
                accordion
              >
                <pre>
                  {{ child }}
                </pre>
              </n-collapse>
            </n-collapse-item>
          </n-collapse>
        </n-collapse-item>
      </n-collapse>
    </template>

    <div v-else>Загрузка</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Add_pay from '@/components/communities/add_pay.vue';

const { communities = [], isLoading = false } = defineProps<{
  communities: any[],
  isLoading: boolean
}>();

const show = ref('');
const showChild = ref('');
</script>
