<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import appNavbar from '../src/components/appNavbar'

export default {
  methods: {
    ...mapActions([
        "GET_CONTENT"
    ])
  },

  mounted() {
    this.GET_CONTENT()
  },

  computed:{
    ...mapGetters([
      'CONTENT'
    ])
  },

  components: {
    appNavbar
  }
}
</script>