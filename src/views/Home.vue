<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button @click="getFX()">{{ fx }}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  computed: {
    fx () {
      return this.$store.state.fx_px_usd
    }
  },
  methods: {
    getFX () {
      this.$store.dispatch('getFX')
    }
  }
}
</script>
