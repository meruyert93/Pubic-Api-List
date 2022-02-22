<template>
  <b-button
    class="iconButton"
    :iconName="iconName"
    :iconFill="iconFill"
    :iconSize="iconSize"
    :iconColor="iconColor"
    :disabled="disabled"
    :type="type"
    :href="href"
    :rel="rel"
    :target="target"
    :to="to"
    :append="append"
    :replace="replace"
    :exact="exact"
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
    /**
     * <router-link> prop: Setting append prop always appends the relative path to the current path
     */
    append: { type: Boolean },
    disabled: { type: Boolean, default: false },
    /**
     * <router-link> prop: The default active class matching behavior is inclusive match.
     * Setting this prop forces the mode to exactly match the route
     */
    exact: { type: Boolean, default: false },
    href: { type: String },
    /**
     * Defaults to `inherit` if left empty
     */
    iconColor: { type: String },
    iconFill: { type: Boolean, default: false },
    iconName: { type: String },
    iconSize: { type: Number },
    rel: { type: String },
    /**
     * <router-link> prop: Setting the replace prop will call 'router.replace()'
     * instead of 'router.push()'
     * when clicked, so the navigation will not leave a history record
     */
    replace: { type: Boolean, default: false },
    tabindex: { type: Number },
    target: { type: String, default: '_self' },
    /**
     * <router-link> prop: Denotes the target route of the link.
     * When clicked, the value of the to prop will be passed to router.push() internally,
     * so the value can be either a string or a Location descriptor object
     */
    to: { type: [String, Object] },
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
