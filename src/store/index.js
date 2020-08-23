import Vue from 'vue'
import Vuex from 'vuex'

import checklist from './modules/checklist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checklist,
  },
  strict: true,
})
