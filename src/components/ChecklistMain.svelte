<script lang="ts">
  import ChecklistSection from "./ChecklistSection.svelte";

  let { checklist } = $props();
</script>

<article>
    <h1>{checklist.title}</h1>
    <h2>{checklist.subtitle}</h2>
    <div>{checklist.date}</div>
    {#each checklist.sections as section}
      <ChecklistSection section={section} />
    {/each}
</article>