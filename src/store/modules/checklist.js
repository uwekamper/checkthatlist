// initial state
// state is a function, this enables store module reuse
// see: https://stackoverflow.com/questions/49557177/vuex-state-returned-as-function-or-object-literal
const state = () => ({
  title: '',
  items: [],
  active_index: -1,
  deferred_items: [],
})

// getters
const getters = {
  title: (state) => state.title,
  items: (state) => state.items,
  active_index: (state) => state.active_index,
  deferred_items: (state) => state.deferred_items,
}

// actions
const actions = {
  load({ commit }, checklist_url) {
    fetch(checklist_url)
      .then(response => response.json())
      .then(data => {
        commit('initChecklist', data);
      });
  },
  // Set the checkbox to "checked"
  check({ commit, dispatch, state }, [index, move_to_next]) {
    // do nothing if this is not a checkable item
    if (state.items[index].type !== 'item') {
      console.log("Tried to check an uncheckable item")
      return;
    }
    // find out if item needs to be checked or unchecked. item.checked might be undefined.
    const new_val = state.items[index].checked !== true ? true :false;
    // set the new value
    commit('assignItem', [index, {'checked': new_val}]);
    if (move_to_next === true) {
      dispatch('down');
    }
  },
  up({ commit, state }) {
    for(let i = state.active_index - 1; i > 0; i--) {
      if (state.items[i].type === 'item') {
        let new_index = i;
        commit('setActiveIndex', new_index);
        break;
      }
    }
  },
  down({ commit, state }) {
    if (state.active_index === (state.items.length - 1)) {
      return;
    }
    for(let i = state.active_index + 1; i < state.items.length; i++) {
      if (state.items[i].type === 'item') {
        let new_index = i;
        commit('setActiveIndex', new_index);
        break;
      }
    }
  }
}

// mutations
const mutations = {
  initChecklist(state, checklist_data) {
    state.title = checklist_data.title;
    state.items = checklist_data.items;
    // set active index to the first item
    for(let i = 0; i < checklist_data.items.length; i++) {
      if (checklist_data.items[i].type === 'item') {
        state.active_index = i;
        break;
      }
    }
    state.deferred_items = [];
  },
  setActiveIndex(state, new_index) {
    state.active_index = new_index;
  },
  assignItem(state, [index, payload]) {
    const updated_item = { ...state.items[index], ...payload };
    state.items.splice(index, 1, updated_item);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
