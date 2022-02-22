<template>
  <footer>
    Copyright ©
    <a href="https://github.com/meruyert93" target="_blank">Meruyert Karim</a>
    {{ new Date().getFullYear() }}
    |
    <a href="https://github.com/meruyert93/Pubic-Api-List" target="_blank">Source Code</a>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  width: 100%;
  height: 2.5rem;
  color: var(--grey);
}
a {
  color: var(--green);
}
</style>
