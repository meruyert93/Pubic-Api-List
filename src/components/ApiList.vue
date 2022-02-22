<template>
  <div>
    hello

    <Table
      :items="apiList"
      :perPage="10"
      :currentPage="currentPage"
      @filtered="onFiltered"
    />
    <Pagination
      :totalCount="apiList.length"
      :perPage="10"
      :currentPage="currentPage"
      @change="(value) => onPageChange(value)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { INIT } from '../store/_constants'
import Pagination from './Pagination.vue'
import Table from './Table.vue'

export default {
  data () {
    return {
      currentPage: 1
    }
  },
  components: {
    Pagination,
    Table
  },
  computed: {
    ...mapGetters(['apiList'])
  },
  methods: {
    ...mapActions({
      init: INIT
    }),
    onPageChange (value) {
      this.currentPage = value
    },
    onFiltered (filteredItems) {
      console.log(filteredItems)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
