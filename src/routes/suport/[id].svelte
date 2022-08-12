<script lang="ts">
    import { page } from '$app/stores';
    let params = $page.params;

    console.log($page)
</script>

<svelte:head>
    <title>
        Resultado para {params.id}
    </title>
</svelte:head>
<center>
    <h2>
        El id de la petición es {params.id};
    </h2>
</center>