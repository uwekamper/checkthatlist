<template>
  <li :class="isActiveClass">
    <!-- section header -->
    <template v-if="isHeader">
      <h2 class="border-2 border-black px-1 my-2" :class="headerClass">{{ item.text }}</h2>
    </template>
    <!-- regular check list item -->
    <template v-if="isCheckItem">
      <div @click.prevent.stop="clickItem" class="w-100 flex px-1 mb-1">
        <span class="item-checkbox mr-1">
          <input type="checkbox" :checked="item.checked === true"/>
        </span>
        <span class="item-description mr-1 flex-none text-left">{{ item.description }}</span>
        <span class="flex-1" style="overflow: hidden">..........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        </span>
        <span class="item-condition ml-1 flex-none text-right">{{ item.condition }}</span>
      </div>
    </template>
 </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'checklist-item',
  props: {
    item: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    },
    active: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    isActiveClass() {
      if (this.active === true) {
        return ['active'];
      }
      else {
        return [];
      }
    },
    isHeader() {
      if (this.item.hasOwnProperty('type') && this.item.type === 'header') {
        return true;
      }
      return false;
    },
    headerClass() {
      if (this.item['css_class'] === undefined) {
        return [];
      }
      return this.item['css_class'];
    },
    isCheckItem() {
      if (
        (this.item.hasOwnProperty('type') && this.item.type === 'item') ||
        (this.item.hasOwnProperty('description') && this.item.hasOwnProperty('condition'))
      ) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions('checklist', ['check']),
    clickItem() {
      if (this.item.checked === true) {
        // if the item is already checked, don't move to the next item in the list.
        this.check([this.index, false]);
      }
      else {
        this.check([this.index, false]);
      }
    }
  }
}
</script>
