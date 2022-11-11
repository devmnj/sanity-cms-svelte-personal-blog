 <script>
	import { urlFor } from '$lib/ImageBuilder';
 /**
	 * @type {any}
	 */
  export let portableText;

$: ({ value } = portableText);
 </script>
 
 <div class="place-content-center flex w-5/6 h-3/5">
    <img class="" src={`${urlFor(value)}`} alt=""/>
 </div>
 