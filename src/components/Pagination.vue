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
    <!-- <template #prev-text>
      <svgicon
        name="arrow-left"
        class="icon"
        :fill="false" />
    </template> -->
    <!-- <template #page="{ page, active }">
      <div class="pageWrapper">
        <span class="page" :class="{ 'page_active': active }">{{page}}</span>
        <svgicon
          v-if="active"
          name="polygon"
          class="hexagon"
          width="32"
          height="32"
          :fill="true" />
      </div>
    </template> -->
    <!-- <template #next-text>
      <svgicon
        name="arrow-right"
        class="icon"
        :fill="false" />
    </template> -->
  </b-pagination>
</template>

<script>
import '../icons/arrow-left'
import '../icons/arrow-right'
import '../icons/polygon'
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
.pagination {
  ::v-deep .page-item.bv-d-xs-down-none {
    // has to overwrite bootstrap styles that also set !important
    display: list-item !important;
  }

  ::v-deep .page-link {
    text-decoration: none;
    cursor: pointer;
  }

  ::v-deep .ellipsis {
    color: var(--gray);
  }
}

.pageWrapper {
  position: relative;
}

.hexagon {
  color: var(--medium-gray);
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
}

.page {
  z-index: 5;
  position: relative;
  color: var(--gray);

  &_active {
    color: var(--black);
    font-weight: 500;
  }
}
</style>
