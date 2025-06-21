<script lang="ts">
  import ChecklistDivider from "./ChecklistDivider.svelte";
  import ChecklistItem from "./ChecklistItem.svelte";

  let { section } = $props();
</script>

<section>
  <div class="section-title-block">
    <h3 class="section-title">{section.title}</h3>
  </div>
  {#each section.items as item}
    {#if item.divider === true}
      <ChecklistDivider></ChecklistDivider>
    {:else}
      <ChecklistItem item={item}></ChecklistItem>
    {/if}
  {/each}
</section>

<style>
  section {
    border: 1px solid black;
    margin-bottom: 1.25rem;
  }
  .section-title-block {
    background-color: black;
  }
  h3.section-title {
    margin: 0px;
    font-size: 1.5rem;
    color: white;
    padding: 0px 0 0px 0;
  }
</style>