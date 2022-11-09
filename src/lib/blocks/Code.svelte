
<script  >
	import { onMount } from "svelte";
    import Prismjs from "../Prismjs.svelte";
    export let portableText;
    
    $:  
      ({value} = portableText)
      
     onMount(()=>{
      // console.log('Code:portableText');
     })
    
  </script>
  <svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css" integrity="sha512-XZoe1WroNfbcndQJexn+pbMEytiaSYRHDuKjew+Nn0xYSTmB4sfoZnBdqYCrXq2IwAcPZS/sXE5ju/JbppYOsA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </svelte:head>
<Prismjs language={value.language} code={value.code} header= {value.language} />
  