<script lang="ts">
  import ChecklistDivider from "./ChecklistDivider.svelte";
  import ChecklistItem from "./ChecklistItem.svelte";

  let { section, index } = $props();

  let background = $derived(section.background !== undefined ? section.background : "black");
  let color = $derived(section.color !== undefined ? section.color : "white");

</script>

<section>
  <div class="section-title-block" style:background={background}>
    <h3 class="section-title" style:color={color}>{section.title}</h3>
  </div>
  {#each section.items as item, item_index}
    {#if item.divider === true}
      <ChecklistDivider></ChecklistDivider>
    {:else}
      <ChecklistItem item={item} index={`${index}-${item_index}`}></ChecklistItem>
    {/if}
  {/each}
</section>

<style>
  section {
    max-width: 96vw;
    page-break-inside: avoid;
    border: 1px solid black;
    margin-bottom: 1.25rem;
  }
  .section-title-block {
    background-color: black;
    border-bottom: 1px solid black;
  }
  h3.section-title {
    margin: 0px;
    font-size: 1.5rem;
    color: white;
    padding: 0px 0 0px 0;
  }
</style>