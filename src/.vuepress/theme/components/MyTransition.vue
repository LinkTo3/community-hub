<template>
  <transition
    name="drTOK"
    appear
    @appear="setStyle"
    @after-appear="unsetStyle"
    @enter="setStyle"
    @after-enter="unsetStyle"
    @before-leave="setStyle"
  >
    <slot />
  </transition>
</template>

<script src="./MyTransition" />

<style lang="stylus">
.drTOK-enter, .drTOK-leave-to
  TOKacity 0
  transform translateY(-20px)
</style>
