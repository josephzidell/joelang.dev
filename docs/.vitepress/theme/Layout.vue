<script setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <img src="https://shields.io/github/v/release/josephzidell/joelang?display_name=tag&include_prereleases&sort=semver" alt="Latest Release" />
    </template>
  </Layout>
</template>
