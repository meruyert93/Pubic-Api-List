<template>
  <div class="skeletonList">
    <ul class="list">
      <li class="item" v-for="i in itemCount" :key="i" >
        <div class="wrapper">
          <span class="title" />
          <span class="text" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itemCount: { type: Number, default: 10 }
  }
}
</script>

<style lang="scss" scoped>
@mixin skeletonFade (
  $gradient:"linear-gradient(to top, rgba(255,255,255, 1) 20%, rgba(255,255,255, 0) 80% )"
) {
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #{$gradient};
  }
}

@mixin listReset() {
  list-style: none;
  margin: 0;
  padding: 0;
}

@keyframes skeletonLoading {
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
}

@mixin skeletonAnimation {
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    animation-name: skeletonLoading;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(
      to right,
      var(--gray) 2%,
      var(--black) 38%,
      var(--gray)53%
    );
    background-size: 50%;
    mix-blend-mode: overlay;
    z-index: 5;
  }
}

@mixin skeleton($width) {
  &:empty {
    width: $width;
    height: 10px;
    background-color: var(--medium-gray);
    border-radius: 32px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
}

.skeletonList {
  position: relative;
  background-color: var(--white);
}

.list {
  position: relative;
  @include skeletonAnimation();
  @include skeletonFade();
  @include listReset();

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
}

.item {
  color: var(--gray);
  transition: background 150ms ease-in-out;
  padding: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 12px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 24px;
}

.title {
  @include skeleton(90%);
  color: var(--deep-gray);
  margin-bottom: 4px;
}

.text {
  @include skeleton(30%);
  font-size: 12px;
  line-height: 16px;
}
</style>
