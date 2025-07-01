<script lang="ts">
  import ChecklistSection from "./ChecklistSection.svelte";

  let { checklist } = $props();
</script>

<article>
  <div class="title-area">
    <h1>{checklist.title}</h1>
    <h2>{checklist.subtitle}</h2>
    <div class="title-date">{checklist.date}</div>
  </div>
  {#each checklist.sections as section, index}
    <ChecklistSection section={section} index={index}/>
  {/each}
</article>

<style>
  .title-area {
    padding: 1rem;
    border: 1px solid black;
    margin-bottom: 1rem;
  }
  h1 {
    font-style: italic;
    font-weight: bold;
    margin-bottom: 0px;
  }
  h2 {
    margin-top: 0px;
  }
  
  .title-date {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: right;
  }
</style>