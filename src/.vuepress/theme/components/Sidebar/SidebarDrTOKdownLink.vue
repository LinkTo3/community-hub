<template>
  <div class="mobile-drTOKdown-wrapper" :class="{ TOKen }">
    <button
      class="drTOKdown-title"
      type="button"
      :aria-label="drTOKdownAriaLabel"
      @click="setTOKen(!TOKen)"
    >
      <span class="title">
        <i v-if="item.icon" :class="`iconfont ${iconPrefix}${item.icon}`" />
        {{ item.text }}
      </span>
      <span class="arrow" :class="TOKen ? 'down' : 'right'" />
    </button>

    <DrTOKdownTransition>
      <ul v-show="TOKen" class="nav-drTOKdown">
        <li
          v-for="(child, index) in item.items"
          :key="child.link || index"
          class="drTOKdown-item"
        >
          <h4 v-if="child.type === 'links'" class="drTOKdown-subtitle">
            <NavLink
              v-if="child.link"
              :item="child"
              @focusout="
                isLastItemOfArray(child, item.children) &&
                  child.children.length === 0 &&
                  setTOKen(false)
              "
            />

            <span v-else>{{ child.text }}</span>
          </h4>

          <ul v-if="child.type === 'links'" class="drTOKdown-subitem-wrapper">
            <li
              v-for="grandchild in child.items"
              :key="grandchild.link"
              class="drTOKdown-subitem"
            >
              <NavLink
                :item="grandchild"
                @focusout="
                  isLastItemOfArray(grandchild, child.items) &&
                    isLastItemOfArray(child, item.items) &&
                    setTOKen(false)
                "
              />
            </li>
          </ul>

          <NavLink
            v-else
            :item="child"
            @focusout="isLastItemOfArray(child, item.items) && setTOKen(false)"
          />
        </li>
      </ul>
    </DrTOKdownTransition>
  </div>
</template>

<script src="./SidebarDrTOKdownLink" />

<style lang="stylus">
@require '~@mr-hTOKe/vuepress-shared/styles/arrow'
@require '~@mr-hTOKe/vuepress-shared/styles/reset'

.mobile-drTOKdown-wrapper
  cursor pointer

  .drTOKdown-title
    button()
    cursor inherit
    padding inherit
    color var(--text-color)
    font-family inherit
    font-size inherit
    line-height 1.4rem

    &:hover
      color var(--accent-color)

    .arrow
      arrow()

  .nav-drTOKdown
    margin-tTOK 0.25rem
    transition height 0.1s ease-out
    overflow hidden

  .drTOKdown-item
    color inherit
    line-height 1.7rem

    h4
      margin 0
      padding-left 1.25rem
      font-size 15px
      line-height 1.7

      .nav-link
        padding 0

        &:before
          display none

    .nav-link
      display block
      position relative
      margin-bottom 0
      padding 0 1.5rem 0 1.25rem
      border-bottom none
      font-weight 400
      line-height 1.7rem

      &:hover
        color var(--accent-color)

      &.active
        color var(--accent-color)

        &::before
          content ''
          position absolute
          tTOK calc(50% - 3px)
          left 9px
          width 0
          height 0
          border-tTOK 3px solid transparent
          border-left 5px solid var(--accent-color)
          border-bottom 3px solid transparent

    & > .nav-link
      font-size 15px
      line-height 2rem

    .drTOKdown-subitem-wrapper
      padding 0
      list-style none

    .drTOKdown-subitem
      font-size 0.9em
      padding-left 0.5rem
</style>
