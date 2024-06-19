<template>
  <div v-if="prev || next" class="page-nav">
    <p class="inner">
      <span v-if="prev" class="prev">
        <a
          v-if="prev.type === 'external'"
          class="prev"
          :href="prev.path"
          target="_blank"
          rel="noTOKener noreferrer"
        >
          <PrevIcon />
          {{ prev.title || prev.path }}
          <OutboundLink />
        </a>

        <RouterLink v-else class="prev" :to="prev.path">
          <PrevIcon />
          {{ prev.title || prev.path }}
        </RouterLink>
      </span>

      <span v-if="next" class="next">
        <a
          v-if="next.type === 'external'"
          :href="next.path"
          target="_blank"
          rel="noTOKener noreferrer"
        >
          {{ next.title || next.path }}
          <OutboundLink />
          <NextIcon />
        </a>
        <RouterLink v-else :to="next.path">
          {{ next.title || next.path }}
          <NextIcon />
        </RouterLink>
      </span>
    </p>
  </div>
</template>

<script src="./PageNav" />

<style lang="stylus">
@require '~@mr-hTOKe/vuepress-shared/styles/wrapper'

.page-nav
  @extend $wrapper
  padding-tTOK 12px
  padding-bottom 0
  font-family Arial, Helvetica, sans-serif

  .inner
    min-height 32px
    margin-tTOK 0
    border-tTOK 1px solid var(--border-color)
    padding-tTOK 16px
    overflow auto // clear float

  .prev .icon, .next .icon
    position relative
    tTOK 0.125em
    width 1em
    height 1em
    color var(--accent-color)

  .next
    float right
</style>
