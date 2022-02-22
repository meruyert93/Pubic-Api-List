<template lang="html">
  <b-pagination
    :value="currentPage"
    class="pagination"
    :total-rows="totalCount"
    :per-page="perPage"
    limit="5"
    align="center"
    first-number
    last-number
    size="sm"
    @change="(value) => $emit('change', value)"
  >
  </b-pagination>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    'b-pagination': BPagination
  },
  props: {
    currentPage: { type: Number, required: true },
    totalCount: { type: Number, required: true },
    perPage: { type: Number, required: true }
  }
}
</script>

<style lang="scss" scoped>
</style>
