<script lang="ts">
  import { onMount } from 'svelte';

  import ChecklistMain from './components/ChecklistMain.svelte';

  import LightningFS from '@isomorphic-git/lightning-fs';
  import http from 'isomorphic-git/http/web';
  import git from 'isomorphic-git';
  import { Buffer } from 'buffer'

  // Bundlers require Buffer to be defined on window
  window.Buffer = Buffer
  // Initialize isomorphic-git with a file system
  const fs = new LightningFS('fs', {wipe: true})
  // I prefer using the Promisified version honestly
  const pfs = fs.promises
  const dir =  '/tutorial8'

  const doSetup = async () => {
    console.log(dir);
    try {
      await pfs.mkdir(dir);
    } catch(err) {
      console.log("dir exists");
    }
    console.log("cloning")
    await git.clone({
      fs,
      http,
      dir,
      corsProxy: 'https://cors.isomorphic-git.org',
      url: 'https://github.com/c-base/c-base-checklists.git',
      ref: 'master',
      singleBranch: true,
      depth: 10
    });
    console.log("cloned")
    let dirList = await pfs.readdir(dir);
    console.log(dirList);

    let checklist_file = await pfs.readFile(`${dir}/mainhall-vortrag-pa.json`, 'utf8');
    checklist = JSON.parse(checklist_file);
    console.log(await git.log({fs, dir}))
  }

  onMount(() => {
    doSetup();
  });


  let checklist = $state({
    "title": "CLONING CHECKLIST ...",
    "subtitle": "Please wait",
    "date": "Loading",
    "sections": []
  });


</script>


<main>
  <ChecklistMain checklist={checklist}></ChecklistMain>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
