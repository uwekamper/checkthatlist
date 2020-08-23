<template>
  <ul class="checklist-item-list">
    <checklist-item v-for="(item, index) in items"
                    :key="index"
                    :item="item"
                    :index="index"
                    :active="isActive(index)"></checklist-item>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import ChecklistItem from './ChecklistItem.vue';

export default {
  name: 'checklist-item-list',
  components: {
    ChecklistItem,
  },
  props: {
    'items': {
      required: true,
      type: Array,
    }
  },
  computed: {
    ...mapGetters('checklist', ['active_index'])
  },
  methods: {
    isActive(index) {
      if (this.active_index === index) {
        return true;
      }
      return false;
    }
  }
}
</script>
