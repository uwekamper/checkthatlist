<template>
  <div>
    <h1 v-if="title" class="h-10 text-center">{{ title }}</h1>
    <div class="mb-auto flex-1 text-xl">
      <checklist-item-list :items="items"></checklist-item-list>
    </div>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ChecklistItemList from './ChecklistItemList.vue'

export default {
  name: 'checklist-display',
  data: function() {
    return {
      event_listener: null,
    };
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
    },
    keyListener(event) {
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
    }
  },
  created() {
    window.addEventListener('keydown', this.keyListener);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyListener);
  },

}
</script>
