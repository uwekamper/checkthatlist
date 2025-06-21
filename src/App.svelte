<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import ChecklistMain from './components/ChecklistMain.svelte';
  import viteLogo from '/vite.svg'

  let checklist = $state({
    "title": "NORMAL CHECKLIST",
    "subtitle": "Airbus A319, Airbus A320",
    "date": "November 2017",
    "sections": [
      {
        "title": "BEFORE START",
        "items": [
          {
            "description": "COCKPIT PREP",
            "status": "COMPLETE (BOTH)"
          },
          {
            "description": "GEAR PINS and COVERS",
            "status": "REMOVED"
          },
          {
            "description": "SIGNS",
            "status": "ON / AUTO",
          },
          {
            "description": "ADIRS",
            "status": "NAV",
          },
          {
            "description": "FUEL QUANTITY",
            "status": "_____ KG. / BALANCED",
          },
          {
            "description": "TO DATA",
            "status": "SET",
          },
          {
            "description": "BARO REF",
            "status": "SET",
          },
          {
            "divider": true,
          },
          {
            "description": "WINDOWS / DOORS",
            "status": "CLOSED / ARMED (BOTH)",
          },
          {
            "description": "BEACON",
            "status": "ON",
          },
          {
            "description": "MOBILE PHONE",
            "status": "OFF (BOTH)",
          },
          {
            "description": "THRUST LEVERS",
            "status": "IDLE",
          },
          {
            "description": "PARKING BRAKE",
            "status": "SET",
          }
        ]
      },
      {
        "title": "AFTER START",
        "items": [
          {
            "description": "ANTI ICE",
            "status": "AS RQRD",
          },
          {
            "description": "ECAM STATUS",
            "status": "CHECKED",
          },
          {
            "description": "PITCH TRIM",
            "status": "_____% SET",
          },
          {
            "description": "RUDDER TRIM",
            "status": "ZERO",
          }

        ]
      },
    ]
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
