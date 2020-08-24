<template>
  <nav class="bg-gray-800 p-2 mt-0 fixed w-100 z-10 bottom-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div class="bg-gray-100 flex text-xl" style="height: 2rem;">
        <button @click="onCheckClick" class="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
        Check (Enter)
        </button>

      </div>
      <div class="flex flex-col" style="height: 2rem;">
        <button @click="up" class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
          ⬆️&nbsp;Prev
        </button>
        <button @click="down" class="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold p  y-2 px-4 border border-blue-700 rounded">
          Next&nbsp;⬇️
        </button>
      </div>
    </div>
</nav>

</template>

<script>
export default {};
</script>
