<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | - Онлайн школа Italiamo` : `Онлайн школа Italiamo` }}</template>
  </metainfo>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import appNavbar from '../src/components/appNavbar'
import appFooter from "./components/appFooter";

export default {
  components: {
    appNavbar, appFooter
  },
  props: {
    footercomment:String,
  }
}
</script>