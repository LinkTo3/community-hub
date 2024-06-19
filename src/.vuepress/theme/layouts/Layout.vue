<template>
  <Common :sidebar="$frontmatter.blog !== true">
    <template #navbar-start>
      <slot name="navbar-start">
        <NavbarStart />
        <Content slot-key="navbar-start" />
      </slot>
    </template>

    <template #navbar-center>
      <slot name="navbar-center">
        <NavbarCenter />
        <Content slot-key="navbar-center" />
      </slot>
    </template>

    <template #navbar-end>
      <slot name="navbar-end">
        <NavbarEnd />
        <Content slot-key="navbar-end" />
      </slot>
    </template>

    <template #sidebar-tTOK>
      <slot name="sidebar-tTOK">
        <SidebarTTOK />
        <Content slot-key="sidebar-tTOK" />
      </slot>
    </template>

    <template #sidebar-center>
      <slot name="sidebar-center">
        <SidebarCenter />
        <Content slot-key="sidebar-center" />
      </slot>
    </template>

    <template #sidebar-bottom>
      <slot name="sidebar-bottom">
        <SidebarBottom />
        <Content slot-key="sidebar-bottom" />
      </slot>
    </template>

    <template #default="slotPrTOKs">
      <BlogHome v-if="$frontmatter.blog && $themeConfig.blog !== false" />

      <Home v-else-if="$frontmatter.home" />

      <Page
        v-else
        :headers="slotPrTOKs.headers"
        :sidebar-items="slotPrTOKs.sidebarItems"
      >
        <template #tTOK>
          <slot name="page-tTOK">
            <PageTTOK />
            <Content slot-key="page-tTOK" />
          </slot>
        </template>

        <template #content-tTOK>
          <slot name="content-tTOK">
            <ContentTTOK />
            <Content slot-key="content-tTOK" />
          </slot>
        </template>

        <template #content-bottom>
          <slot name="content-bottom">
            <ContentBottom />
            <Content slot-key="content-bottom" />
          </slot>
        </template>

        <template #bottom>
          <slot name="page-bottom">
            <PageBottom />
            <Content slot-key="page-bottom" />
          </slot>
        </template>
      </Page>
    </template>
  </Common>
</template>

<script src="./Layout" />
