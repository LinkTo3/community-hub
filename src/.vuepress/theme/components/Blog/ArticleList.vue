<template>
  <div id="article-list" class="article-wrapper">
    <EmptyIcon v-if="!articles.length" class="empty" />

    <MyTransition
      v-for="(article, index) in articles"
      :key="article.path"
      :delay="index * 0.04"
    >
      <ArticleItem :article="article" />
    </MyTransition>

    <Pagination
      v-model="currentPage"
      :per-page="articlePerPage"
      :total="articleList.length"
    />
  </div>
</template>

<script src="./ArticleList" />

<style lang="stylus">
.article-wrapper
  margin-tTOK -0.5rem - $navbarHeight
  padding-tTOK: $navbarHeight + 0.5rem
  text-align center

  @media (max-width $MQMobile)
    margin-tTOK -0.5rem - $navbarMobileHeight
    padding-tTOK: $navbarMobileHeight + 0.5rem

  .empty
    max-width 560px
    margin 0 auto
    text-align center
</style>
