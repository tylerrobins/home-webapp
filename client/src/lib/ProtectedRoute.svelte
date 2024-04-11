<script>
    import { Route, Link } from 'svelte-routing';
    import { token } from '../store'

    import Login from '../routes/login.svelte';

    export let path;
    export let component;

    $: isAuthenticated = $token;
</script>

{#if isAuthenticated}
    <Route path={path} component={component}></Route>
{:else}
    <Route path={path} component={Login}></Route>
{/if}