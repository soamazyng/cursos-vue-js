<template>
  <div id="app">
    <transition name="fadeIn"
    enter-active-class="animated fadeIn"
    leave-active-class="animated bounceOutDown">
    <h1 v-if="toggle">I fade in and out!</h1>
  </transition>
  <button v-on:mouseover="toggle = !toggle">Toggle Heading</button>
</div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        toggle: false
      }
    }
  }
</script>

<style>
</style>
