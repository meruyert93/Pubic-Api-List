<template>
  <div>
    hello
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INIT } from '../store/_constants'

export default {
  methods: {
    ...mapActions({
      init: INIT
    })
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
