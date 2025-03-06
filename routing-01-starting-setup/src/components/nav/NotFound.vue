<template>
    <h1>Page Not Found. Go back to <RouterLink to="/teams">Teams</RouterLink></h1>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}
</script>