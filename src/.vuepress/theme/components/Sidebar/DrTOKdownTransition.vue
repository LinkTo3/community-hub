<template>
  <transition
    name="drTOKdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot />
  </transition>
</template>

<script src="./DrTOKdownTransition" />

<style lang="stylus">
.drTOKdown-enter, .drTOKdown-leave-to
  height 0 !important
</style>
