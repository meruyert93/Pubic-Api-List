<template>
  <div class="searchBar" :class="`searchBar_${size}`">
    <b-form-input
      ref="input"
      class="input"
      v-model="valueModel"
      :disabled="disabled"
      :autofocus="autofocus"
      :placeholder="placeholder ? placeholder : 'Search'"
      @keyup.esc="onReset"
      @keyup.enter="(evt) => $emit('enter', evt)"
    />
    <IconButton
      class="searchIcon"
      :iconSize="iconSize"
      @mousedown.prevent.stop="stayFocused"
      iconColor="var(--gray)"
      iconName="search"
      :tabindex="-1"
      :disabled="true"
    />
    <IconButton
      class="resetIcon"
      :fill="false"
      v-if="value && value.length > 0"
      :iconSize="iconSize"
      @click="onReset"
      iconColor="var(--gray)"
      iconName="delete-1"
      :tabindex="-1"
    />
  </div>
</template>

<script>
import { BFormInput } from 'bootstrap-vue'
import IconButton from './IconButton.vue'

import '../icons/search'
import '../icons/delete-1'

export default {
  components: {
    IconButton,
    'b-form-input': BFormInput
  },
  props: {
    value: { type: String },
    placeholder: { type: String },
    autofocus: { type: Boolean, default: false },
    size: { type: String, default: 'm' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    iconSize () {
      switch (this.size) {
        case 'sm':
          return 14
        case 'm':
          return 16
        case 'lg':
          return 18
        default:
      }

      return 16
    },
    valueModel: {
      get () { return this.value },
      set (value) { this.$emit('value-model', value) }
    }
  },
  methods: {
    stayFocused () {
      this.$refs.input.focus()
      return false
    },
    onReset () {
      this.$emit('reset')
      this.$refs.input.focus()
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.searchIcon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.resetIcon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.searchBar { // m, default
  position: relative;
}

.input {
  font-size: 16px;
  color: var(--deep-gray);
  border: 1px solid var(--medium-gray);
  height: auto;
  padding: 8px 36px;
  background: none;
  border-radius: 12px;
}

.input::placeholder {
  color: var(--gray);

  .input:focus {
    border: 2px solid var(--blue);
  }
}

.searchIcon {
  appearance: none;
  background: none;
  border: none;
  position: absolute;
  padding: 0;
  display: flex;
}

.resetButton {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
