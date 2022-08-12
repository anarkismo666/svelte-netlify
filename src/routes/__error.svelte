
<script>
    import { page } from '$app/stores'
  </script>
  {#if $page.error}
  <div class="your-error-layout">
    <h4>Ocurrio un error:</h4>
    <h2>
        error:
        {$page.error.message}<br/>
        causa:
        {$page.error.cause}<br/>
        nombre:
        {$page.error.name}<br/>
    </h2>
  </div>
  {:else} 
    <h1>Sin evaluación de error</h1>
  {/if}

<a href="/">Regresar</a>