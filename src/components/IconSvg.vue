<template>
  <svg class="svg-icon" :class="customClass" aria-hidden="true">
    <title v-if="title">{{title}}</title>
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    title: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      required: true
    },
    customClass: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
