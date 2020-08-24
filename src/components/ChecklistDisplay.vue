<template>
  <div>
    <h1 v-if="title" class="h-10 text-center">{{ title }}</h1>
    <div class="mb-auto flex-1 text-xl">
      <checklist-item-list :items="items"></checklist-item-list>
    </div>
  <nav-buttons :on-up="up"
               :on-down="down"
               :on-enter="checkAndNext">
  </nav-buttons>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ChecklistItemList from './ChecklistItemList.vue'
import NavButtons from "./NavButtons.vue";

export default {
  name: 'checklist-display',
  data: function() {
    return {
      event_listener: null,
    };
  },
  components: {
    ChecklistItemList,
    NavButtons
  },
  computed: {
    ...mapGetters('checklist', ['title', 'items', 'deferred_items', 'active_index'])
  },
  methods: {
    ...mapActions('checklist', ['up', 'down', 'check']),
    onCheckClick() {
      this.check([this.active_index, true]);
    },
    checkAndNext() {
      this.check([this.active_index, true]);
    },
    justCheck() {
      this.check([this.active_index, false]);
    }
  }

}
</script>
