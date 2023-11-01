<template>
  <button :class="$style.button">
    <i :class="$style.icon" aria-hidden="true">
      <slot name="icon"/>
    </i>
    <span class="foo">
      <slot>DEFAULT TEXT</slot>
    </span>
  </button>
</template>

<style module>
.button {
  display: flex;
}

.button > :not(:first-child) {
  margin-left: 8px;
}

.icon {
  color: tomato;
  font-weight: bolder;
}
</style>

<style scoped>
.foo {
  color: blue;
}
</style>
