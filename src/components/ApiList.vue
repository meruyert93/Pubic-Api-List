<template>
  <div>
    hello
    <Pagination
      :totalCount="apiList.length"
      :perPage="20"
      :currentPage="1"
      @change="onPageChange"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { INIT } from '../store/_constants'
import Pagination from './Pagination.vue'

export default {
  components: {
    Pagination
  },
  computed: {
    ...mapGetters(['apiList'])
  },
  methods: {
    ...mapActions({
      init: INIT
    }),
    onPageChange () {
      console.log('switch page')
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
