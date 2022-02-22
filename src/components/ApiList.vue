<template>
  <div class="apiList">
    <SearchBar
      class="searchBar"
      :value="filter"
      @value-model="(value) => filter = value"
      @reset="filter = ''"
    />
    <SelectMenu
      :option="filterCategory"
      @option-model="(value) => filterCategory = value"
      :options="filterCategoryOptions"
    />
    <Table
      class="table"
      :items="apiList"
      :filter="filter"
      :perPage="perPage"
      :currentPage="currentPage"
      :filterOn="filterOn"
      @filtered="onFiltered"
    />
    <Pagination
      v-if="totalCount > perPage"
      :totalCount="totalCount"
      :perPage="perPage"
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
import SearchBar from './SearchBar.vue'
import SelectMenu from './SelectMenu.vue'

export default {
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: ['API'], // filter based on API name
      initDone: false,
      totalCount: null,
      filterCategory: ''
    }
  },
  components: {
    Pagination,
    Table,
    SearchBar,
    SelectMenu
  },
  computed: {
    ...mapGetters(['apiList']),
    filterCategoryOptions () {
      const uniqueFilterSet = new Set()
      this.apiList.map(item => uniqueFilterSet.add(item.Category))
      return Array.from(uniqueFilterSet)
    }
  },
  methods: {
    ...mapActions({
      init: INIT
    }),
    onPageChange (value) {
      this.currentPage = value
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalCount = filteredItems.length
      this.currentPage = 1
    }
  },
  async created () {
    await this.init()
    this.initDone = true
    this.totalCount = this.apiList.length
  }
}
</script>

<style lang="scss" scoped>
.apiList {
  margin: 48px;
}

.table {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
