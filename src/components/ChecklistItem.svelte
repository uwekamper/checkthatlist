<script lang="ts">
  let { item } = $props();
</script>

<div class="checklist-item">
  <div class="checklist-item-description">{item.description}</div>
  <div class="checklist-item-dots"></div>
  <div class="checklist-item-status">{item.status}</div>  
</div>

<style>
  .checklist-item {
    margin: 0px 5px 0px 5px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .checklist-item-description {
    flex-grow: 0;
  }
  .checklist-item-dots {
    flex-grow: 1;
    border-bottom: 2px dotted black;
    margin-bottom: 5px;
  }
  .checklist-item-status {
    flex-grow: 0;
  }
</style>

