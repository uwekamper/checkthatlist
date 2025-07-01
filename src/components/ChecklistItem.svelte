<script lang="ts">
  let { item, index } = $props();
  let checked: boolean = $state(false);

  let description = $derived.by(() => {
    if( item.description !== undefined) {
      return item.description;
    }
    else {
      return Object.keys(item)[0];
    }
  })

  let condition = $derived.by(() => {
    if( item.condition !== undefined) {
      return item.condition;
    }
    else {
      return Object.values(item)[0];
    }
  })

  const toggle = () => {
    checked = !$state.snapshot(checked)
  }

  let anchor = $derived(`item-${index}`)
</script>

<a id={anchor} class="checklist-item" data-checked={checked ? 'true' : 'false'} onclick={toggle}>
  <div class="checklist-item-description">{description}</div>
  <div class="checklist-item-dots"></div>
  <div class="checklist-item-condition">{condition}</div>
  <div class="checklist-item-checkmark">
    {#if checked}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><!-- Icon from HeroIcons by Refactoring UI Inc - https://github.com/tailwindlabs/heroicons/blob/master/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353l4.493-6.74a.75.75 0 0 1 1.04-.207" clip-rule="evenodd"/></svg>
    {/if}
   </div>
</a>
{#if item._info !== undefined}
<div class="checklist-item-info">
  {item._info}
</div>
{/if}

<style>
  .checklist-item {
    color: #213547;
    cursor: pointer;
    padding: 0px 5px 0px 5px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .checklist-item:hover {
    background-color: #eee;
  }
  .checklist-item[data-checked=true] {
    background-color: #ddd;
  }
  .checklist-item[data-checked=true]:hover {
    background-color: #ccc;
  }

  .checklist-item-description {
    white-space: nowrap;
    flex-grow: 0;
  }
  .checklist-item-dots {
    flex-grow: 1;
    border-bottom: 2px dotted #213547;
    margin-bottom: 5px;
  }
  .checklist-item-condition {
    white-space: nowrap;
    flex-grow: 0;
  }
  
  /*.checklist-item-checkmark {
    position: absolute;
    right: -20px;
    bottom: 1px;
  }*/

  .checklist-item-checkmark {
    flex-grow: 0;
    flex-shrink: 0;
    align-self: center;
    border: 1px solid #213547;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 14px;
    padding-top: -5px;
    overflow: hidden;
  }

  .checklist-item-info {
    break-before: always;
    padding: 0px 5px 0px 5px;
    margin-left: 8px;
    margin-bottom: 2px;
    color: #888;
    font-size: smaller;
    text-align: left;
    border-left: 1px solid #aaa;
  }
</style>

