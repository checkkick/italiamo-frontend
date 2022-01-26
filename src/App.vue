<template>
  <metainfo>
    <template #title="{ content  }">{{ content + ' - Онлайн-школа итальнского языка ITALIAMO' }}</template>
  </metainfo>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import appNavbar from '../src/components/appNavbar'
import appFooter from "./components/appFooter";
import { useMeta } from 'vue-meta'

export default {
  components: {
    appNavbar, appFooter
  },
  props: {
    footercomment:String,
  },
  setup() {
    useMeta({
      title: 'Онлайн-школа итальнского языка ITALIAMO',
      htmlAttrs: { lang: 'ru' },
    })
  },
}
</script>
