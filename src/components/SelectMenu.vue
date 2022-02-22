<template>
  <div class="selectMenu">
    <label>filter by Category Name</label>
    <b-form-select
      :options="options"
      v-model="optionModel"
    />
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    'b-form-select': BFormSelect
  },
  props: {
    option: { type: String, default: '' },
    options: { type: Array }
  },
  computed: {
    optionModel: {
      get () { return this.option },
      set (value) { this.$emit('option-model', value) }
    }
  }
}
</script>

<style lang="scss" scoped>
.selectMenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
}
</style>
