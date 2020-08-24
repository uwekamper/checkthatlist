<template>
  <div id="app" class="xl:container flex flex-col h-screen">
    <div>
      <router-link to="/">Overview</router-link>
      <router-link to="/checklist">Checklist</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch('checklist/load', '/static/checklists/simcity.json');
  }
}
</script>
