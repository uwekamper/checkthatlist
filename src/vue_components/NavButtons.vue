<template>
  <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 bottom-0">
    <div class="container mx-auto flex flex-wrap">
      <div class="w-1/2 bg-gray-100 flex text-xl" style="height: 2rem;">
        <button @click="enter"
                style="height: 20vh;"
                class="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
        Check (Enter)
        </button>

      </div>
      <div class="w-1/2 flex flex-col">
        <button @click="up"
                style="height: 10vh;"
                class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p y-2 px-4 border border-blue-700 rounded">
          ⬆️&nbsp;Prev
        </button>
        <button @click="down" style="height: 10vh;"
                class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
          Next&nbsp;⬇️
        </button>
      </div>
    </div>
</nav>

</template>

<script>
export default {
  props: {
    'onUp': {
      type: Function
    },
    'onDown': {
      type: Function
    },
    'onEnter': {
      type: Function
    }
  },
  methods: {
    up() {
      if (this.onUp === undefined) {
        console.log("onUp is undefined, I don't know what function to call.");
        return;
      }
      this.onUp();
    },
    down() {
      if (this.onDown === undefined) {
        console.log("onDown is undefined, I don't know what function to call.");
        return;
      }
      this.onDown();
    },
    enter() {
      if (this.onEnter === undefined) {
        console.log("onEnter is undefined, I don't know what function to call.");
        return;
      }
      this.onEnter();
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
        ;
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
};
</script>
