<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
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

  let git_rev:any = $state("");
  let git_timestamp:any = $state(new Date());
  let git_author:string = $state("");

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

    let checklist_file = await pfs.readFile(`${dir}/mainhall-vortrag-pa-behringer-x32.json`, 'utf8');
    checklist = JSON.parse(checklist_file);
    const git_log = await git.log({fs, dir})
    git_rev = git_log[0].oid.substring(0, 7)
    git_timestamp = new Date(git_log[0].commit.author.timestamp * 1000);
    git_author = git_log[0].commit.author.name;
  }

  let qrcanvas: HTMLElement;

  let url = window.location.href;

  const showQrCode = async () => {
    await QRCode.toCanvas(qrcanvas, url)
  };

  onMount(() => {
    doSetup();
    showQrCode();
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

<footer>
  <div>
    <canvas id="canvas" bind:this={qrcanvas}></canvas>
  </div>
  <div class="checklist-meta">
    Last revision: {git_rev}<br>
    by {git_author}<br>
    {git_timestamp.toUTCString()}.
    <p>
      To use this checklist digitally, scan the QR-Code or type this URL:<br>
      <a href={url}>{url}</a>
    </p>
  </div>
  <div class="checklist-url">
    
  </div>
</footer>



<style>
  footer {
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
    text-align: left;
  }
  footer .checklist-url {
    padding-left: 15px;
  }
  footer .checklist-meta {
    padding-top: 15px;
    font-size: smaller;
  }
  footer .checklist-meta a {
    color: #213547;
    text-decoration: none;
    font-size: medium;
    font-weight: bold;
  }
  footer .checklist-meta a:hover {
    text-decoration: underline;
  }
</style>
