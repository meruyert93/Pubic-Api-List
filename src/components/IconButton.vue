<template>
  <b-button
    class="iconButton"
    :disabled="disabled"
    :type="type"
    :tabindex="tabindex"
    v-on="$listeners"
  >
    <svgicon
      class="icon"
      :name="iconName"
      :fill="iconFill"
      :width="`${iconSize}`"
      :height="`${iconSize}`"
      :color="iconColor || 'inherit'"
    />
  </b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  components: {
    'b-button': BButton
  },
  props: {
    disabled: { type: Boolean, default: false },
    /**
     * Defaults to `inherit` if left empty
     */
    iconColor: { type: String },
    iconFill: { type: Boolean, default: false },
    iconName: { type: String },
    iconSize: { type: Number },
    tabindex: { type: Number },
    type: { type: String, default: 'button' }
  }
}
</script>

<style lang="scss" scoped>
.iconButton {
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
  color: var(-gray);
  transition: all 150ms ease-in-out;

  &:hover,
  &:active,
  &:focus-visible {
    color: var(--blue);
  }

  &.disabled,
  :disabled {
    color: var(--medium-gray);
    cursor: default;

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--medium-gray);
    }
  }
}

.icon {
  margin: 0;
  flex-shrink: 0;
}
</style>
