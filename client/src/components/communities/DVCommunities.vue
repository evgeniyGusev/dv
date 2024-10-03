<template>
  <div>
    <template v-if="!isLoading">

      <div class="modal-button-wrapper">
        <n-button @click="showModal = true">
          Внести платёж
        </n-button>
      </div>

      <n-modal
        v-model:show="showModal"
        preset="dialog"
        positive-text="Внести"
        negative-text="Отмена"
      >
        <template #header>
          Внесение платежа
        </template>

        <n-cascader
          v-model:value="paymentTarget"
          multiple
          placeholder="За кого"
          clearable
          max-tag-count="responsive"
          expand-trigger="click"
          :options="paymentOptions"
          cascade
          check-strategy="child"
          show-path
          filterable
          :clear-filter-after-select="false"
        />

        <div class="modal-cost-wrapper">
          <n-input type="text" placeholder="Сумма" />
        </div>
      </n-modal>

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
import {computed, ref} from 'vue';

const { communities = [], isLoading = false } = defineProps<{
  communities: any[],
  isLoading: boolean
}>();

const show = ref('');
const showChild = ref('');
const showModal = ref(false);

const paymentTarget = ref(null);
const paymentOptions = computed(() => {
  return communities.map(({ _id, name, children }) => ({
    value: _id,
    label: name,
    children: children.map(({ _id: chId, firstName: chFName, lastName: chLName }) => ({
      value: chId,
      label: `${chLName} ${chFName}`,
    }))
  }));
});
</script>

<style scoped lang="scss">
.modal-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  margin-bottom: 18px;
}

.modal-cost-wrapper {
  margin-top: 16px;
}
</style>
