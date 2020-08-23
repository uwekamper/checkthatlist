<template>
  <div id="app">
    <div>
      <router-link to="/overiew">Overview</router-link>
      <router-link to="/checklist">Checklist</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/*import ChecklistDisplay from "./components/ChecklistDisplay.vue"
import OverviewPage from "./components/OverviewPage.vue"*/

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
    this.$store.dispatch('checklist/load', '/static/checklists/test1.json');
  }
}
</script>
