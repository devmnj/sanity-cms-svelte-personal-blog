
  <script>
	import { onMount } from "svelte";

   export let portableText;
 
    $:  
      ({asset} = portableText);
   
    onMount(()=>{
      console.log('image' +  asset);
    })
  </script>
  
  <!-- <figure>
    <img src={value?.asset?._ref} alt= " " />
    <figcaption>{value?.caption}</figcaption>
  </figure> -->
<div>{JSON.stringify(asset?.type)}</div>