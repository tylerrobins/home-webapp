<script>
  import { Router, Route } from 'svelte-routing';

  import Login from './routes/login.svelte';
  import Dashboard from './routes/dashboard.svelte';

  import ProtectedRoute from './lib/ProtectedRoute.svelte'

</script>

<Router>
  <Route path="/" component={Login}></Route>
  <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
</Router>