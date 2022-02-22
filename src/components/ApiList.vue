<template>
  <div class="apiList">
    <SearchBar
      class="searchBar"
      :value="filter"
      placeholder="Search by API name"
      @value-model="(value) => filter = value"
      @reset="filter = ''"
    />
    <SkeletonList v-if="!initDone"/>

    <div v-else>
      <SelectMenu
        :option="filterCategory"
        @option-model="(value) => filterCategory = value"
        :options="filterCategoryOptions"
      />
      <Table
        class="table"
        :items="filteredApiList"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { INIT } from '../store/_constants'
import Pagination from './Pagination.vue'
import Table from './Table.vue'
import SearchBar from './SearchBar.vue'
import SelectMenu from './SelectMenu.vue'
import SkeletonList from './SkeletonList.vue'

export default {
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: ['API'], // filter based on API name
      initDone: false,
      totalCount: null,
      filterCategory: 'All Categories'
    }
  },
  components: {
    Pagination,
    Table,
    SearchBar,
    SelectMenu,
    SkeletonList
  },
  computed: {
    ...mapGetters(['apiList']),
    filterCategoryOptions () {
      const uniqueFilterSet = new Set()
      // giving possibility to select all categories
      uniqueFilterSet.add('All Categories')

      this.apiList.map(item => uniqueFilterSet.add(item.Category))
      return Array.from(uniqueFilterSet)
    },
    filteredApiList () {
      const filteredItems = this.filterCategory !== 'All Categories'
        ? this.apiList.filter(item => item.Category === this.filterCategory)
        : this.apiList
      return filteredItems
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
  watch: {
    filteredApiList (val) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalCount = val.length
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
