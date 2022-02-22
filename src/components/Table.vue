<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="(value) => $emit('filtered', value)"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    'b-table': BTable
  },
  props: {
    items: { Type: Array, required: true },
    fields: { Type: Array },
    filterOn: { type: Array },
    currentPage: { type: Number, required: true },
    perPage: { type: Number, required: true },
    filter: { type: String, default: null },
    sortBy: { type: String, default: '' },
    sortDesc: { type: Boolean, default: false },
    sortDirection: { type: String, default: 'asc' }
  }
}
</script>

<style lang="scss" scoped>

</style>
