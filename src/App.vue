<template>
  <div id="app" class="xl:container flex flex-col h-screen">


    <div>

      <router-link to="/checklist">Checklist</router-link>
    </div>
    <router-view></router-view>



  </div>


</template>

<script>
import NavButtons from "./components/NavButtons.vue";

export default {
  name: 'app',
  components: {
    NavButtons,
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
