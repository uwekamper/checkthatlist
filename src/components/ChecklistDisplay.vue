<template>
  <div class="xl:container flex flex-col h-screen justify-between">
    <h1 v-if="title" class="h-10 text-center">{{ title }}</h1>
    <div class="mb-auto flex-1 text-xl">
      <checklist-item-list :items="items"></checklist-item-list>
    </div>
    <div class="bg-gray-100 flex text-xl" style="height: 2rem;">
      <button @click="onCheckClick" class="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
      Check (Enter)
      </button>

    </div>
    <div class="flex flex-row" style="height: 2rem;">
      <button @click="up" class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
        ⬆️&nbsp;Prev
      </button>
      <button @click="down" class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
      Next&nbsp;⬇️
      </button>


    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ChecklistItemList from './ChecklistItemList.vue'

export default {
  name: 'checklist-display',
  data: function() {
    return {};
  },
  components: {
    ChecklistItemList
  },
  computed: {
    ...mapGetters('checklist', ['title', 'items', 'deferred_items', 'active_index'])
  },
  methods: {
    ...mapActions('checklist', ['up', 'down', 'check']),
    onCheckClick() {
      this.check([this.active_index, true]);
    }
  },
  created() {
    debugger;
    window.addEventListener('keydown', (event) => {
      // If down arrow was pressed...
      if (event.key === 'ArrowUp') {
        this.up();
      }
      if (event.key === 'ArrowDown') {
        this.down();
      }
      if (event.key === 'Enter') {
        this.check([this.active_index, true]);
      }
      if (event.key === ' ') {
        this.check([this.active_index, false]);
      }
    });
  }
}
</script>
