<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import appNavbar from '../src/components/appNavbar'
import appFooter from "./components/appFooter";
import {mapActions} from 'vuex'

export default {
  components: {
    appNavbar, appFooter
  },
  mounted() {
    this.GET_CONTENT(1)
    this.GET_CLIENTS()
    this.GET_TEACHERS()
  },
  methods: {
  ...mapActions('Backend', {
      GET_CONTENT : 'GET_CONTENT',
      GET_CLIENTS : 'GET_CLIENTS',
      GET_TEACHERS : 'GET_TEACHERS'
    })
  },
  props: {
    footercomment:String,
  }
}
</script>